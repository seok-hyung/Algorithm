// 프로그래머스 스택&큐 level 2

function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let stack = 0;
    for (let j = i + 1; j < prices.length; j++) {
      stack++;
      if (prices[i] > prices[j]) {
        break;
      }
    }
    answer.push(stack);
  }
  return answer;
}

// 스택을 활용한 풀이
function solution2(prices) {
  let answer = new Array(prices.length).fill(0);
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      let top = stack.pop();
      answer[top] = i - top;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    let top = stack.pop();
    answer[top] = prices.length - 1 - top;
  }

  return answer;
}

// 큐를 활용한 풀이
function solution3(prices) {
  let answer = new Array(prices.length).fill(0);
  let queue = prices.map((price, index) => ({ price, index }));

  console.log(answer);
  console.log(queue);
  while (queue.length > 0) {
    let current = queue.shift();
    for (let i = 0; i < queue.length; i++) {
      if (current.price <= queue[i].price) {
        answer[current.index]++;
      } else {
        answer[current.index]++;
        break;
      }
    }
  }

  return answer;
}

console.log(solution3([1, 2, 3, 2, 3]));

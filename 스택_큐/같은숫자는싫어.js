//프로그래머스 스택/큐 level 1

// 첫번째 풀이
// 정확성 : 71.9
// 효율성 28.1
function solution(arr) {
  var answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// arr의 원소들의 순서를 유지해야한다 --> Set의 경우 순서 보장 안함

// 두번째 풀이
// 스택을 활용한 풀이
// 정확성 : 71.9
// 효율성 28.1
let arrr = [1, 1, 3, 3, 0, 1, 1];
function solution2(arr) {
  let stack = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    // 현재 요소가 스택의 맨 위 요소와 같지 않으면 스택에 현재 요소를 넣습니다
    if (stack[stack.length - 1] !== arr[i]) {
      stack.push(arr[i]);
    }
  }
  return stack;
}

// 세번째 풀이
// filter 메소드 활용

function solution3(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

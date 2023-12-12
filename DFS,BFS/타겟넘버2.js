// 타겟 넘버 재풀이

// 1. 재귀함수를 사용한 풀이
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(index, sum) {
    if (index < numbers.length) {
      // 아직 사용하지 않은 숫자가 있는 경우
      dfs(index + 1, sum + numbers[index]);
      dfs(index + 1, sum - numbers[index]);
    } else {
      // 모든 숫자를 사용한 경우
      if (sum === target) {
        answer++;
      }
      return;
    }
  }

  return answer;
}
console.log(solution([4, 1, 2, 1], 4));

// 2. 스택을 활용한 풀이
function solution2(numbers, target) {
  let answer = 0;
  let stack = [
    [numbers[0], 0],
    [-numbers[0], 0],
  ]; // 초기값 설정

  while (stack.length) {
    const [sum, index] = stack.pop();

    // 모든 숫자를 다 사용한 경우
    if (index === numbers.length - 1) {
      // 합계가 타겟과 같은 경우
      if (sum === target) {
        answer++;
      }
    } else {
      // 아직 사용하지 않은 숫자가 있는 경우
      const nextIndex = index + 1;
      const nextNumber = numbers[nextIndex];

      stack.push([sum + nextNumber, nextIndex]); // 다음 숫자를 더한 경우
      stack.push([sum - nextNumber, nextIndex]); // 다음 숫자를 뺀 경우
    }
  }

  return '답은 : ' + answer;
}

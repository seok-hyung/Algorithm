// 타겟 넘버 재풀이

// 1. 재귀함수를 사용한 풀이
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(index, sum) {
    if (index < numbers.length) {
      console.log(index, sum);
      // 아직 사용하지 않은 숫자가 있는 경우
      dfs(index + 1, sum + numbers[index]);
      console.log('ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ');
      dfs(index + 1, sum - numbers[index]);
    } else {
      console.log(index, sum);
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

solution([4, 1, 2, 1], 4);

dfs(0, 0);

dfs(1, 4); // 4를 더한경우
dfs(2, 5); // 1을 더한경우
dfs(3, 7); // 2를 더한경우
dfs(4, 8); // 1를 더한경우, 인덱스가 4로 numbers배열의 길이와 같아졌으므로 더 이상 재귀 호출을 하지않고, sum이 target과 같은지 확인한다.

dfs(4, 6); //1를 뺴준 경우

dfs(3, 3); // 2를 뺀 경우
dfs(4, 4); // 1를 더한경우	answer+=1

dfs(4, 2); // 1를 빼준경우

dfs(2, 3); // 1을 뺀 경우
dfs(3, 5); // 2를 더한경우
dfs(4, 6); // 1를 더한경우
dfs(4, 4); // 1를 빼준경우		answer+=1

dfs(3, 1);
dfs(4, 2);
dfs(4, 0); // .....

dfs(1, -4); // 4를 뺀 경우

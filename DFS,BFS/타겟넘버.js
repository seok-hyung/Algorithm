// 프로그래머스 DFS/BFS level 2
function solution(numbers, target) {
  let answer = 0;
  dfs(0, 0);
  function dfs(index, sum) {
    if (index === numbers.length) {
      if (sum === target) {
        answer++;
      }
      return;
    }
    dfs(index + 1, sum + numbers[index]);
    dfs(index + 1, sum - numbers[index]);
  }

  return answer;
}

console.log(solution([1, 1, 1], 1));

// 1. dfs 함수 선언 및 호출, index(현재 처리하는 숫자의 인덱스)와 sum(지금까지의 합).
// 2. dfs 함수 내부에서는 먼저 index가 numbers 배열의 길이와 같은지 확인한다. 만약 같다면, 모든 숫자를 확인한 것이므로 sum이 목표값과 같은지 확인합니다.
//  만약 같다면 answer를 1 증가시키고, 그렇지 않다면 아무런 작업도 수행하지 않습니다. 그리고 이 시점에서 재귀 호출을 종료(return)합니다.
// 3. index가 numbers 배열의 길이보다 작다면, 아직 확인해야 할 숫자가 남아있는 것입니다.
//  이 경우에는 두 가지 재귀 호출을 수행합니다: 하나는 현재 숫자를 합에 더하는 경우(sum + numbers[index]), 다른 하나는 현재 숫자를 합에서 빼는 경우(sum - numbers[index])입니다. 
//  이렇게 해서 가능한 모든 조합을 시도해봅니다.
// 4. dfs 함수의 처음 호출이 종료되면 answer를 반환해준다.

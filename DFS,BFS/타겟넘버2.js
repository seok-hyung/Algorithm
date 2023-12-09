// 타겟 넘버 재풀이
function solution(numbers, target) {
  let answer = 0;

  function dfs(index, sum) {
    // 실행할 코드
    // 탈출 조건
    // 인덱스값이 numbers의 길이가 되었을때
    // sum 값이 target값이 되었을 때
    dfs(0, 0);
    // 탈출조건
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

// 모든 경우의 수를 따지고 나옴값이 target이 되면 +1
// 일단 다 더한다, 끝나면 한 턴 돌아와서 빼준다.
//

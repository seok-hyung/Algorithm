// 소수 만들기

// 첫번쨰 풀이, dfs 활용
// 결과 ... Maximum call stack size exceeded
function isPrime(n) {
  for (var i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;
  function dfs(index, sum, count) {
    if (count < 3) {
      dfs(index + 1, sum + nums[index], count + 1); //현재 인덱스 값 선택
      dfs(index + 1, sum, count); // 현재 인덱스의 값 선택안함
    } else if (count === 3 || index === nums.length) {
      if (isPrime(sum)) answer += 1;
      return;
    }
  }
  dfs(0, 0, 0);

  return answer;
}

// index가 배열 nums의 길이를 초과하게 되면 nums[index]는 undefined가 되며, 이는 sum + nums[index]를 NaN으로 만들게 된다.
// 그 결과, 코드는 무한 루프에 빠지게 돼서 Maximum call stack size exceeded 에러가 발생한 것이다.

// 두번째 풀이

function solution2(nums) {
  let answer = 0;

  function dfs(index, sum, count) {
    if (index === nums.length || count === 3) {
      if (count === 3 && isPrime(sum)) answer += 1;
      return;
    }

    dfs(index + 1, sum + nums[index], count + 1); // 현재 인덱스의 숫자를 선택하는 경우
    dfs(index + 1, sum, count); // 현재 인덱스의 숫자를 선택하지 않는 경우
  }

  dfs(0, 0, 0);

  return answer;
}

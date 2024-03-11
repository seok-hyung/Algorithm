// 프로그래머스 완전탐색 level 2

// 에라토스테네스의 체
function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
// 매개변수를 n을 인자로 받고, 2부터 n의 제곱근까지의 수로 n을 나눴을떄, 0으로 나눠떨어지는 수가 있다면 소수가 아니라고 판단합니다.

// numbers 1이상 7이하 문자열, 0 ~ 9만으로 이루어져있음

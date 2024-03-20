const solution = (l, u) => {
  let s = '';
  let answer = 0;
  for (let i = l; i <= u; i++) {
    s += i;
  }

  s.split('').map((a) => {
    answer += Number(a);
  });

  return answer;
};

// 각 자리수의 합 구하는 함수
const sumOfDigits = (n) => {
  let sum = 0;
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
};

const sumOfDigitsInRange = (L, U) => {
  let totalSum = 0;
  for (let i = L; i <= U; i++) {
    totalSum += sumOfDigits(i);
  }
  return totalSum;
};

console.log(sumOfDigitsInRange(2466, 3081));

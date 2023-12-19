// 첫번째 풀이
// 테스트케이스 11~16,18,24,25 시간초과
function getDivisorNum(num) {
  const divisors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors.length;
}

function solution(number, limit, power) {
  let answer = 0;
  let divisorArr = new Array(number + 1).fill(0);
  for (let i = 0; i <= number; i++) {
    divisorArr.push(getDivisorNum(i));
  }
  for (let i = 0; i < divisorArr.length; i++) {
    if (divisorArr[i] > limit) {
      divisorArr[i] = power;
    }
  }
  for (let i = 0; i < divisorArr.length; i++) {
    answer += divisorArr[i];
  }

  return answer;
}
//첫 번째 반복문: 이 반복문에서는 getDivisorNum(i) 함수를 number번 호출합니다. 따라서 이 반복문의 시간 복잡도는 O(number * num)입니다. 여기서 num은 getDivisorNum 함수의 입력값 중 가장 큰 값인 number입니다.
// 따라서 이 반복문의 시간 복잡도는 O(number^2)입니다.

// 두번쨰 풀이
function getDivisorNum(num) {
  let count = 0;
  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      if (i * i === num) {
        // 제곱근이 약수인 경우
        count += 1;
      } else {
        // 제곱근이 아닌 약수인 경우
        count += 2;
      }
    }
  }
  return count;
}

function solution(number, limit, power) {
  let answer = 0;
  let divisorArr = new Array(number + 1).fill(0);
  for (let i = 0; i <= number; i++) {
    divisorArr[i] = getDivisorNum(i);
    if (divisorArr[i] > limit) {
      divisorArr[i] = power;
    }
    answer += divisorArr[i];
  }

  return answer;
}
// 이 반복문에서는 getDivisorNum(i) 함수를 number번 호출합니다. 따라서 이 반복문의 시간 복잡도는 O(number * sqrt(num))입니다. 여기서 num은 getDivisorNum 함수의 입력값 중 가장 큰 값인 number입니다.
// 따라서 이 반복문의 시간 복잡도는 O(number * sqrt(number))입니다.

// 1) 1부터 100의 합 구하기

// 1.1 반복문 사용
let s = 0;
for (let i = 0; i <= 100; i++) {
  s += i;
}

let s2 = 0;

// 1.2 재귀함수 사용
function f(n) {
  if (n <= 1) {
    return 1; // 종료조건
  }
  return n + f(n - 1);
}
// console.log(f(100));

// 2) 문자열 뒤집기

// 2.1 반복문 사용
function reverseStr(str) {
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

// 2.2 재귀함수 사용
function reverseStr2(str) {
  let result = '';

  dfs(str.length - 1, str);
  function dfs(idx) {
    result += str[idx];
    if (idx === 0) {
      return;
    }
    dfs(idx - 1);
  }
  return result;
}
// console.log(reverseStr2('가나다'));

// 2.3 재귀함수 사용
function reverStr3(str) {
  if (str.length === 1) {
    return str;
  }
  return str[str.length - 1] + reverStr3(str.slice(0, str.length - 1));
}

// 3) 각 자리수의 합

// 3.1 반복문
function eachDigit(num) {
  let result = 0;
  for (let i = 0; i < num.length; i++) {
    result += parseInt(num[i]);
  }
  let result2 = num.split('').reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  console.log(result);
  console.log(result2);
}

// 3.2 재귀함수 사용
function eachDigit2(num) {
  let result = 0;
  dfs(0);
  function dfs(idx) {
    result += parseInt(num[idx]);
    if (idx === num.length - 1) {
      return;
    }
    dfs(idx + 1);
  }
  return result;
}

// 3.3 재귀함수 사용
function eachDigit3(str) {
  if (str.length == 1) {
    return parseInt(str);
  }
  return parseInt(str[str.length - 1]) + eachDigit3(str.slice(0, str.length - 1));
}

// 4) 피보나치 수열

// 4.1 반복문 사용 O(n)
function fibonacci(num) {
  let a = 1;
  let b = 1;
  for (let i = 2; i < num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

// 4.2 재귀함수 사용 O(n^2)
function fibonacci2(num) {
  if (num === 1 || num == 2) {
    return 1;
  }
  return fibonacci2(num - 1) + fibonacci2(num - 2);
}

// 4.3 Dp 사용
function fibonacciDP(num) {
  let fib = [0, 1, 1];
  for (let i = 3; i <= num; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[num];
}

// 5) 2진수 변환하기
// 5.1 반복문 사용
function binary(num) {
  let result = '';
  while (num > 0) {
    result = (num % 2) + result;
    num = Math.floor(num / 2);
  }
  return result;
}

// 5.2 재귀함수 사용
function binary2(num) {
  if (num === 1 || num === 0) {
    return String(num);
  }
  return binary2(Math.floor(num / 2)) + String(num % 2);
}

// binary2(10)
//        b(5)              + 0
//      b(2)       + b(1)   + 0
//   b(1) + b(0)   +  1     + 0
// 1010

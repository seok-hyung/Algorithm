// 프로그래머스 스택/큐 level 2

// 첫번쨰 모의 시도 (스택/큐 쓰지 않고 풀어보기) (실패)
// 문자열의 끝에 ( 가 오는 경우 false 반환
// 각각의 소괄호 개수가 다른 경우 false 반환
// 정확성 5,11 실패
function solution(s) {
  if (s[s.length - 1] === '(') return false;
  if (s.replaceAll(')', '').length !== s.replaceAll('(', '').length) return false;
  return true;
}
// 두번째 모의 시도 (실패)
// 1.개수가 같고 2. (로 시작하고 3. )로 끝나는데 false인 반례 찾기
// 반례 : ())(()
// 결론 : 역시 스택/큐 활용해서 풀어야 한다.
// 정확성 5,11 실패
function solution3(s) {
  if (s.replaceAll(')', '').length !== s.replaceAll('(', '').length) return false;
  if (s[s.length - 1] === '(') return false;
  if (s[0] === ')') return false;
  return true;
}

// 세번째 풀이 스택의 깊이 개념 활용 (성공)
// balance 값이 0이면 true 아니라면 false, ++)
// balance값이 음수가 되면 false / 반례 ())(() 해결하기 위함
function solution3(s) {
  let balance = 0;
  let answer = true;
  for (const char of s) {
    if (char === '(') balance++;
    else if (char === ')') balance--;

    if (balance < 0) return false;
  }
  answer = balance === 0 ? true : false;
  return answer;
}

// 네번째 풀이 (스택 활용)
function solution4(s) {
  let stack = [];

  for (const char of s) {
    if (char === '(') {
      stack.push(char);
    } else if (char === ')') {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
}

// 다른 사람의 풀이
function solution5(s) {
  let stackCount = 0;
  for (let i = 0; i < s.length; i++) {
    stackCount += s[i] === '(' ? 1 : -1;
    if (stackCount < 0) return false;
  }
  return stackCount === 0 ? true : false;
}

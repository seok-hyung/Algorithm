// 프로그래머스 Hash level 2

//첫번쨰 풀이
// 테스트케이스 13 실패
// includes 는 찾는값이 맨앞이 아닌 중간 혹은 마지막에 있어도 true를 반환해주기 떄문이다.
function solution(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].includes(phone_book[i])) {
      return false;
    }
  }
  return true;
}

// 두번째 풀이
// startsWith 메소드 활용
function solution2(phone_book) {
  phone_book.sort();
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

// 세번째 풀이
// substring 활용
if (phone_book[i] === phone_book[i + 1].substring(0, phone_book[i].length)) {
  return false;
}

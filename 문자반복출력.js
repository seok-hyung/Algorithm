// 문자반복출력 2가지 방법
function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}

function solution(my_string, n) {
  return [...my_string].map((v) => v.repeat(n)).join("");
}

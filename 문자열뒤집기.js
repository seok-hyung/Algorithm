// 문자열 뒤집기 2가지 방법
function solution(my_string) {
  let answer = "";
  for (let i = my_string.length - 1; i >= 0; i--) {
    answer += my_string[i];
  }
  return answer;
}

function solution(my_string) {
  return my_string.split("").reverse().join("");
}

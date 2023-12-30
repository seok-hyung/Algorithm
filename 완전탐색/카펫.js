// 프로그래머스 완전탐색 level 2
function solution(brown, yellow) {
  var answer = [];
  let sum = brown + yellow;

  for (let height = 3; height <= brown; height++) {
    //임의의 높이로 나눌때 나머지가 없을경우만
    if (sum % height === 0) {
      let width = sum / height; //가로길이

      //테두리를 제외한 길이를 구해야하기 때문에 각각 -2해준뒤 곱셈
      //결과가 yellow와 같다면 해당 높이와 길이 리턴
      if ((height - 2) * (width - 2) === yellow) {
        return [width, height];
      }
    }
  }
  return answer;
}

// 다른 사람의 풀이
function solution(brown, red) {
  var answer = [];
  let row = 1,
    col,
    num;
  while (true) {
    col = Math.floor(red / row);
    num = (row + 2) * 2 + col * 2;
    if (num === brown && row >= col) {
      answer[0] = row + 2;
      answer[1] = col + 2;
      break;
    }
    row++;
  }
  return answer;
}

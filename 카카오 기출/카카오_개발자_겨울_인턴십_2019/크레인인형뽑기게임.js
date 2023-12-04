// level 1

// 풀이과정
let a = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
// 위의 5x5 2차배열을
// 아래 처럼 만든다.
let b = [
  [4, 3],
  [2, 2, 5],
  [1, 5, 4, 1],
  [4, 3],
  [3, 1, 2, 1],
];

// moves [1,5,3,5,1,2,1,4]
// b[moves[i]-1][0] 값이 있다면
// b[moves[i] - 1][0] 값을 스택에 넣어주고, 값을 제거해준다 b[moves[i] - 1].shift()
// 스택에 값이 들어왔고, 2개이상이면 값 2개를 비교해서 같으면 삭제해준다.

function solution(board, moves) {
  let answer = 0;
  let newBoard = [];
  let stack = [];
  for (let i = 0; i < board.length; i++) {
    let temp = [];
    for (let j = 0; j < board.length; j++) {
      if (board[j][i] !== 0) {
        temp.push(board[j][i]);
      }
    }
    newBoard.push(temp);
  }
  for (let i = 0; i < moves.length; i++) {
    if (newBoard[moves[i] - 1][0]) {
      stack.push(newBoard[moves[i] - 1][0]);
      newBoard[moves[i] - 1].shift();
      if (stack.length >= 2) {
        for (let j = 0; j < stack.length; j++) {
          if (stack[j] === stack[j + 1]) {
            stack.splice(j, 2);
            answer += 2;
          }
        }
      }
    }
  }

  return answer;
}

// 다른 사람의 풀이
function solution(board, moves) {
  var answer = 0;
  var arr = [];
  for (var i = 0; i < moves.length; i++) {
    for (var j = 0; j < board.length; j++) {
      if (board[j][moves[i] - 1] !== 0) {
        arr.push(board[j][moves[i] - 1]);
        board[j][moves[i] - 1] = 0;
        break;
      }
    }
    if (arr.length >= 2) {
      if (arr[arr.length - 1] === arr[arr.length - 2]) {
        answer += 2;
        arr.splice(arr.length - 2, 2);
      }
    }
  }
  return answer;
}

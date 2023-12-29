// 프로그래머스 완전탐색 level 1
function solution(answers) {
  let p1 = [1, 2, 3, 4, 5];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let score = [0, 0, 0];
  const result = [];
  for (let i = 0; i < answers.length; i++) {
    if (p1[i % 5] === answers[i]) score[0]++;
    if (p2[i % 8] === answers[i]) score[1]++;
    if (p3[i % 10] === answers[i]) score[2]++;
  }
  const maxScore = Math.max(...score);
  for (let i = 0; i < score.length; i++) {
    if (score[i] === maxScore) {
      result.push(i + 1);
    }
  }
  return result;
}
console.log(solution2([1, 2, 3, 4, 5]));

// 프로그래머스 완전탬색 level 2

// 나의 풀이
// 재귀함수 활용한 풀이, 실패!!
// k : 현재 남은 체력을 나타내는 변수
// dungeons : 탐험해야 하는 던전 목록을 나타내는 배열
// count : 현재까지 탐험한 던전의 수를 나타내는 변수
function solution(k, dungeons) {
  let answer = 0;

  function dfs(k, dungeons, count) {
    if (dungeons.length === 0) {
      answer = Math.max(answer, count);
      return;
    }
    for (let i = 0; i < dungeons.length; i++) {
      const [required, consumed] = dungeons[i];
      if (k >= required) {
        const nextDungeons = [...dungeons.slice(0, i), ...dungeons.slice(i + 1)];
        dfs(k - consumed, nextDungeons, count + 1);
      }
    }
  }

  dfs(k, dungeons, 0);
  return answer;
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ]),
);
// 다른 사람의 풀이
function solution2(k, d) {
  let answer = 0;
  d.sort((a, b) => b[0] - b[1] - (a[0] - a[1]));
  for (let i = 0; i < d.length; i++) {
    if (k >= d[i][0]) {
      k -= d[i][1];
      answer += 1;
    }
  }
  return answer;
}

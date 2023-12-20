// 프로그래머스 스택/큐 level 2
// 시간복잡도 O(n^2)
function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    let cnt = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt += 1;
    }
    if (cnt > 0) {
      answer.push(cnt);
    }
  }

  return answer;
}

console.log(solution([93, 30, 55], [1, 30, 5]));

// 다른 사람의 풀이
// 시간복잡도 O(n)
function solution2(progresses, speeds) {
  let answer = [0];
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index]),
  );
  let maxDay = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[i] <= maxDay) {
      answer[j] += 1;
    } else {
      maxDay = days[i];
      answer[++j] = 1;
    }
  }

  return answer;
}

// 프로그래머스 Greedy level 1

function solution(n, lost, reserve) {
  let answer = n - lost.length; // 처음 체육복 분실하지 않은 수

  let realLost = lost.filter((l) => !reserve.includes(l)); // 겹치는 수 제거
  let realReserve = reserve.filter((r) => !lost.includes(r)); // 겹치는 수 제거
  answer += lost.length - realLost.length;

  realLost.sort((a, b) => a - b);
  realReserve.sort((a, b) => a - b);
  // 왜 정렬을 해줘야 하지? - [4,2], [3,5]와 같은 케이스 때문

  for (let i = 0; i < realLost.length; i++) {
    if (realReserve.length === 0) {
      break;
    }
    let lostIndex = realReserve.indexOf(realLost[i] - 1);
    if (lostIndex !== -1) {
      realReserve.splice(lostIndex, 1);
      answer++;
    } else {
      lostIndex = realReserve.indexOf(realLost[i] + 1);
      if (lostIndex !== -1) {
        realReserve.splice(lostIndex, 1);
        answer++;
      }
    }
  }

  return answer;
}

console.log(solution(5, [2, 3, 4], [1, 3, 5]));

// function solution2(n, lost, reserve) {
//   let answer = 0
//   for (let i = 0; i < lost.length; i++) {
//     for (let j = 0; j < reserve.length; j++) {
//       if (lost[i] === reserve[j]) {
//         lost.splice(i, 1)
//         reserve.splice(j, 1)
//         answer += 1
//       }
//     }
//   }
//   for (let i = 0; i < lost.length; i++) {
//     if (lost.length === 0) return
//     if (reserve.indexOf(lost[i] - 1) !== -1) {
//       lost.splice(i, 1)
//       reserve.splice(reserve.indexOf(lost[i] - 1), 1)
//       answer += 1
//     } else if (reserve.indexOf(lost[i] + 1) !== -1) {
//       lost.splice(i, 1)
//       reserve.splice(reserve.indexOf(lost[i] + 1), 1)
//       answer += 1
//     }
//   }
//   return answer - lost.length
// }

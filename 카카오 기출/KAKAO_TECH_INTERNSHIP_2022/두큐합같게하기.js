function solution1(queue1, queue2) {
  let cnt = 0;

  while (true) {
    let sumQ1 = queue1.reduce((acc, cur) => acc + cur, 0);
    let sumQ2 = queue2.reduce((acc, cur) => acc + cur, 0);
    let half = (sumQ1 + sumQ2) / 2;

    if (sumQ1 === half) {
      break;
    } else if (sumQ1 < sumQ2) {
      queue1.push(queue2.shift());
      cnt += 1;
    } else if (sumQ1 > sumQ2) {
      queue2.push(queue1.shift());
      cnt += 1;
    }
    if (cnt === queue1.length * 2) return -1;
  }
  return cnt;
}
// solution 1 시간 초과
//  추가 문제풀이 필요

// solution 1 실패
// 테스트 19,20,21,22,23,24,28,30 (시간초과)
//  추가 문제풀이 필요
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

// solution 2 실패
// 테스트22,23,24 (시간 초과)
// q1과 q2의 합계를 sumQ1, sumQ2 변수에 미리 계산해 두었고, 큐에 원소를 추가하거나
// 제거할 때마다 해당 원소의 값을 sumQ1 혹은 sumQ2에 반영하는 방식으로 했다.
// 이렇게 하면 위의 solution 1이 매번 reduce를 사용하여 전체 합계를 다시 계산하는 것보다 효율적이다.
// 실패한 테스트 케이스가 줄었지만 여전히 시간초과로 실패이다.
function solution2(q1, q2) {
  let cnt = 0;
  let sumQ1 = q1.reduce((acc, cur) => acc + cur, 0);
  let sumQ2 = q2.reduce((acc, cur) => acc + cur, 0);

  while (true) {
    let half = (sumQ1 + sumQ2) / 2;
    if (sumQ1 === half) {
      break;
    } else if (sumQ1 < sumQ2) {
      let value = q2.shift();
      q1.push(value);
      sumQ1 += value;
      sumQ2 -= value;
      cnt += 1;
    } else if (sumQ1 > sumQ2) {
      let value = q1.shift();
      q2.push(value);
      sumQ1 -= value;
      sumQ2 += value;
      cnt += 1;
    }
    if (cnt === q1.length * 2) return -1;
  }
  return cnt;
}

// solution 3
// 투포인터 활용
function solution3(q1, q2) {
  const q = [...q1, ...q2];
  let sumQ1 = q1.reduce((acc, cur) => acc + cur, 0);
  let sumQ2 = q2.reduce((acc, cur) => acc + cur, 0);

  if (sumQ1 === sumQ2) return 0;

  const totalSum = sumQ1 + sumQ2;

  if (totalSum % 2 != 0) return -1;

  const halfSum = totalSum / 2;
  let start = 0;
  let end = q1.length;
  let cnt = 0;

  while (cnt <= q.length * 3) {
    if (halfSum === sumQ1) {
      return cnt;
    } else if (halfSum > sumQ1) {
      sumQ1 += q[end];
      end++;
      cnt++;
    } else {
      sumQ1 -= q[start];
      start++;
      cnt++;
    }
  }

  return -1;
}

// solution 4
// 다른 사람의 풀이
const solution4 = (q1, q2) => {
  let sumQ1 = q1.reduce((prev, cur) => prev + cur, 0);
  let sumQ2 = q2.reduce((prev, cur) => prev + cur, 0);
  const half = (sumQ1 + sumQ2) / 2;
  const q = [...q1, ...q2];
  let q1Pointer = 0;
  let q2Pointer = q1.length;

  for (let cnt = 0; cnt < q1.length * 3; cnt++) {
    if (sumQ1 === half) {
      return cnt;
    }
    sumQ1 =
      sumQ1 > half
        ? sumQ1 - q[q1Pointer++ % q.length]
        : sumQ1 + q[q2Pointer++ % q.length];
  }

  return -1;
};

// 최대 범위를 q.length * 3 으로 하는 이유

// 우리의 목표는 큐1의 총합(sumQ1)이 큐1과 큐2의 총합의 절반(halfSum)이 되도록 하는 것입니다. 이를 위해서는 큐1의 원소를 큐2로, 혹은 큐2의 원소를 큐1로 이동시켜야 합니다.

// 이 코드에서는 큐1과 큐2의 원소를 모두 담은 배열 q를 사용하고, start와 end 두 개의 포인터를 활용하여 원소를 이동시킵니다. start 포인터는 큐1의 원소를 가리키며, end 포인터는 큐2의 원소를 가리킵니다.

// 이때, 큐1과 큐2의 원소가 완전히 교차되어 배치된 최악의 경우를 생각해봅시다. 이 경우, 큐1의 모든 원소가 큐2로 이동하고, 큐2의 모든 원소가 큐1로 이동해야 합니다. 이는 각 큐의 길이를 두 배한 횟수, 즉 q.length * 2번의 이동을 필요로 합니다.

// 여기서 "포인터가 배열의 끝에 도달하여 다시 처음으로 돌아가는 경우"라는 것은, start 포인터가 큐1의 마지막 원소를 가리키고 난 후, 다음 원소를 가리키기 위해 배열의 처음으로 돌아가야 하는 경우를 말합니다. 이는 배열 q가 원형으로 연결되어 있음을 의미합니다. 이와 같이 원형으로 연결된 배열에서는 포인터가 배열의 끝에 도달하면 다시 처음으로 돌아가야 하므로, 이 경우를 고려하여 추가적으로 q.length번의 이동을 허용한 것입니다.

// 따라서 전체적으로 q.length * 3번의 이동을 허용하여, 어떤 배치의 원소들이 주어져도 항상 정확한 결과를 얻을 수 있습니다.

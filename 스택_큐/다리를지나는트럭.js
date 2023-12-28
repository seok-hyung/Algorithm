// 프로그래머스 스택/큐 level 2
function solution(bridge_length, weight, truck_weights) {
  const bridge = Array.from({ length: bridge_length }, () => 0);
  let curWeight = 0;
  let time = 0;
  while (truck_weights.length > 0) {
    time++;
    curWeight -= bridge.shift();

    if (curWeight + truck_weights[0] <= weight) {
      const curTruck = truck_weights.shift();
      bridge.push(curTruck);
      curWeight += curTruck;
    } else {
      bridge.push(0);
    }
  }
  return time + bridge_length;
}

function solution2(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = Array.from({ length: bridge_length }, () => 0);
  let bridge_sum = 0;

  answer++;
  bridge.shift();
  bridge_sum += truck_weights[0];
  bridge.push(truck_weights.shift());

  while (bridge_sum > 0) {
    answer++;
    bridge_sum -= bridge.shift();
    if (truck_weights.length > 0 && bridge_sum + truck_weights[0] <= weight) {
      bridge_sum += truck_weights[0];
      bridge.push(truck_weights.shift());
    } else {
      bridge.push(0);
    }
  }
  return answer;
}

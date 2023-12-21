// 프로그래머스 스택/큐 level 2
function solution(priorities, location) {
  let answer = 0; // 출력한 문서의 수
  let queue = priorities.map((val, idx) => ({ priority: val, index: idx }));
  console.log(queue);

  while (true) {
    let firstElement = queue.shift();
    // 꺼낸 문서보다 우선순위가 높은 문서가 출력 대기목록에 있는지 확인합니다.
    if (queue.some(({ priority }) => priority > firstElement.priority)) {
      queue.push(firstElement);
    } else {
      //꺼낸 문서가 현재 출력 대기목록에서 가장 높은 우선순위를 가진 문서라면,
      answer++;
      if (firstElement.index === location) {
        break;
      }
    }
  }
  return answer;
}
console.log(solution([2, 1, 3, 2], 2));

// 다른 사람의 풀이
function solution(priorities, location) {
  var arr = priorities.map((priority, index) => ({ index, priority }));

  var queue = [];

  while (arr.length > 0) {
    var firstEle = arr.shift();
    var hasHighPriority = arr.some((ele) => ele.priority > firstEle.priority);
    if (hasHighPriority) {
      arr.push(firstEle);
    } else {
      queue.push(firstEle);
    }
  }

  return queue.findIndex((queueEle) => queueEle.index === location) + 1;
}

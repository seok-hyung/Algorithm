// 프로그래머스 Greedy level 2

// 내림차순
// 인덱스 : start=0 , end = people.length-1
// 값을 저장해주는 변수 : temp
// people[start]와 people[end]를 더한다.
// 만약 그 값이 limit보다 작다면 end-- 해주고 다시 더해준다.
// 위의 과정을 while( temp <= limit ) 까지 반복

// solution1의 문제점
// shift() 및 pop() 이러한 메소드는 배열의 길이에 따라 비례하는 시간 복잡도를 가지는데, 이는 배열이 클 경우 매우 비효율적이다.
// 대신에 포인터 이용하는게 좋다
function solution1(people, limit) {
  let answer = 0;
  let start = 0;
  let end = people.length - 1;
  people.sort((a, b) => b - a);
  while (people.length > 0) {
    if (people[start] + people[end] > limit) {
      console.log(people);
      people.shift();
      answer += 1;
      console.log(people);
    } else if (people[start] + people[end] <= limit) {
      people.shift();
      people.pop();
      answer += 1;
      console.log('1');
    }
  }
  return answer;
}

function solution2(people, limit) {
  let answer = 0;
  people.sort((a, b) => a - b);
  let start = 0;
  let end = people.length - 1;

  while (start <= end) {
    if (people[start] + people[end] <= limit) {
      start++;
    }
    end--;
    answer++;
  }

  return answer;
}
console.log(solution([70, 50, 80, 50], 100));

// 프로그래머스 hash level 1

// 첫번째 풀이
// nums.length / 2 의 값 만큼 종류가 있는지?
// 있으면 nums.length /2가 답
// 없다면 hash의 종류만큼 답
function solution(nums) {
  let answer = 0;
  let hash = {};
  let N = nums.length / 2;

  nums.forEach((element) => {
    hash[element] = hash[element] ? hash[element] + 1 : 1;
  });
  if (Object.keys(hash).length >= N) {
    answer = N;
  } else {
    answer = Object.keys(hash).length;
  }
  return answer;
}
console.log(solution([3, 3, 3, 2, 2, 4]));

// 다른 사람의 풀이
function solution(nums) {
  const max = nums.length / 2;
  const arr = [...new Set(nums)];

  return arr.length > max ? max : arr.length;
}

// 프로그래머스 완전탐색 level 1

// 내림차순으로 각 요소들을 정렬한후
// [a,b]일떄, a의 최대값 * b의 최대값 해주면 된다.
function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;
  let newSizes = sizes.map((v) => v.sort((a, b) => b - a));
  console.log(rotated);
  for (let i = 0; i < newSizes.length; i++) {
    if (maxWidth <= newSizes[i][0]) {
      maxWidth = newSizes[i][0];
    }
    if (maxHeight <= newSizes[i][1]) {
      maxHeight = newSizes[i][1];
    }
  }
  return maxWidth * maxHeight;
}

// 다른사람의 풀이
// 가독성이 좋다.
function solution2(sizes) {
  const rotated = sizes.map(([w, h]) => (w < h ? [h, w] : [w, h])); // 내림차순 정렬

  let maxSize = [0, 0];
  rotated.forEach(([w, h]) => {
    if (w > maxSize[0]) maxSize[0] = w;
    if (h > maxSize[1]) maxSize[1] = h;
  });
  return maxSize[0] * maxSize[1];
}

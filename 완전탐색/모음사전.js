// 프로그래머스 완전탐색 level 2

// 3125 625 125 25 5    3905
// 모든 경우의 수를 dictionary에 저장해주고
// 찾으려는 단어의 인덱스 위치 +1 반환해준다.
function solution(word) {
  const vowels = ['A', 'E', 'I', 'O', 'U'];
  let dictionary = [];

  const dfs = (str) => {
    if (str.length > 5) return;

    dictionary.push(str);
    for (let i = 0; i < 5; i++) {
      dfs(str + vowels[i]);
    }
  };

  vowels.forEach((v) => dfs(v));
  return dictionary.indexOf(word) + 1;
}
console.log(solution('AAAAE'));

// 다른 사람의 풀이
function solution2(word) {
  let answer = word.length;
  const vowels = 'AEIOU';
  const maxNums = [781, 156, 31, 6, 1];

  for (let i = 0; i < word.length; i++) {
    const idx = vowels.indexOf(word[i]);
    answer += idx * maxNums[i];
  }
  return answer;
}

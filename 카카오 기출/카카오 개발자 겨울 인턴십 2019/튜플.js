const solution = s => {
  let answer = []
  const newArr = s
    .replace('{{', '')
    .replace('}}', '')
    .split('},{')
    .map(e => e.split(','))
    .sort((a, b) => a.length - b.length)
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr[i].length; j++) {
      if (!answer.includes(newArr[i][j])) {
        answer.push(newArr[i][j])
      }
    }
  }
  return answer.map(e => parseInt(e))
}

function solution2(s) {
  // 문자열 -> 정수 이차원 배열
  const sArr = s
    .substring(2, s.length - 2)
    .split('},{')
    .map(e => e.split(',').map(e => parseInt(e)))
    .sort((a, b) => a.length - b.length)
  console.log(sArr)
  // 정답을 저장할 배열
  const answer = []
  // 이차원배열을 순회하며 직전 배열과 겹치지 않는 요소만 answer에 추가
  for (let i = 0; i < sArr.length; i++) {
    for (let j = 0; j < sArr[i].length; j++) {
      if (!answer.includes(sArr[i][j])) answer.push(sArr[i][j])
    }
  }
  return answer
}

console.log(solution('{{2},{2,1},{2,1,3},{2,1,3,4}}'))

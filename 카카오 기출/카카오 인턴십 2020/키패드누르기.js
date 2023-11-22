function solution(numbers, hand) {
  let answer = ''
  // 현재위치
  let currentHandPosition = { L: '*', R: '#' }

  // 키 패드 번호에 좌표 부여
  let arr = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  }
  for (let i = 0; i < numbers.length; i++) {
    // 1,4,7
    if (numbers[i] % 3 === 1) {
      answer += 'L'
      currentHandPosition['L'] = numbers[i]
      // 3,6,9 (이때 0 은 제외해줘야한다.)
    } else if (numbers[i] % 3 === 0 && numbers[i] !== 0) {
      answer += 'R'
      currentHandPosition['R'] = numbers[i]
      // 2,5,8,0
    } else {
      let key1 = currentHandPosition['L']
      let key2 = currentHandPosition['R']
      let x1 = arr[key1][0]
      let y1 = arr[key1][1]
      let x2 = arr[key2][0]
      let y2 = arr[key2][1]
      let x3 = arr[numbers[i]][0]
      let y3 = arr[numbers[i]][1]

      // 맨하탄 거리 공식 사용
      let d = Math.abs(x3 - x1) + Math.abs(y3 - y1) // 왼손과의 거리
      let d2 = Math.abs(x3 - x2) + Math.abs(y3 - y2) // 오른손과의 거리
      if (d < d2) {
        answer += 'L'
        currentHandPosition['L'] = numbers[i]
      } else if (d > d2) {
        answer += 'R'
        currentHandPosition['R'] = numbers[i]
      } else {
        if (hand === 'left') {
          answer += 'L'
          currentHandPosition['L'] = numbers[i]
        } else if (hand === 'right') {
          answer += 'R'
          currentHandPosition['R'] = numbers[i]
        }
      }
    }
  }
  return answer
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'))

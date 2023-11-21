function solution(survey, choices) {
  let score = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 }
  for (let i = 0; i < survey.length; i++) {
    if (choices[i] > 4) {
      score[survey[i][1]] += choices[i] - 4
    } else if (choices[i] < 4) {
      score[survey[i][0]] += 4 - choices[i]
    }
  }
  const { R, T, C, F, J, M, A, N } = score
  return `${R >= T ? 'R' : 'T'}${C >= F ? 'C' : 'F'}${J >= M ? 'J' : 'M'}${
    A >= N ? 'A' : 'N'
  }`
  //   let answer =''
  //   if (R >= T) {
  //     answer += 'R'
  //   } else {
  //     answer += 'T'
  //   }

  //   if (C >= F) {
  //     answer += 'C'
  //   } else {
  //     answer += 'F'
  //   }

  //   if (J >= M) {
  //     answer += 'J'
  //   } else {
  //     answer += 'M'
  //   }

  //   if (A >= N) {
  //     answer += 'A'
  //   } else {
  //     answer += 'N'
  //   }

  //   return answer
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]))

function solution(answers) {
  let person1 = [1, 2, 3, 4, 5];
  let person2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let person3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (person1[i % 5] === answers[i]) {
      count[0]++;
    }

    if (person2[i % 8] === answers[i]) {
      count[1]++;
    }

    if (soopo3[i % 10] === answers[i]) {
      count[2]++;
    }
  }

  let max = Math.max(...count);
  let result = [];
  for (let j = 0; j < 3; j++) {
    if (count[j] === max) {
      result.push(j + 1);
    }
  }

  return result;
}

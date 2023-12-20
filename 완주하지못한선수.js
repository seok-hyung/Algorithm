// 프로그래머스 해시 level 1

// 첫번쨰 풀이, 해쉬사용 X
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

// 두번째 풀이, 해쉬 사용 O
function solution2(participant, completion) {
  const myMap = new Map();

  for (const participant of participants) {
    if (!myMap.get(participant)) {
      myMap.set(participant, 1);
    } else {
      myMap.set(participant, myMap.get(participant) + 1);
    }
  }

  for (const completion of completions) {
    if (myMap.get(completion)) {
      myMap.set(completion, myMap.get(completion) - 1);
    }
  }

  for (const participant of participants) {
    if (myMap.get(participant) && myMap.get(participant) >= 1) {
      answer = participant;
    }
  }
}

// 세번째 풀이, 해쉬 사용 O (두번쨰 풀이와 동일함)
function solution3(participant, completion) {
  let hashed = [];
  participant.forEach((entry) => {
    hashed[entry] = hashed[entry] ? hashed[entry] + 1 : 1;
  });
  completion.forEach((entry) => {
    hashed[entry] = hashed[entry] - 1;
  });

  for (var key in hashed) {
    if (hashed[key] >= 1) return key;
  }
}

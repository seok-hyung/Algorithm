// 프로그래머스 hash level 2

// hash
function solution(clothes) {
  let answer = 1;
  let clothesHash = {};

  for (let i = 0; i < clothes.length; i++) {
    let key = clothes[i][1];
    clothesHash[key] = clothesHash[key] ? clothesHash[key] + 1 : 1;
  }

  for (let key in clothesHash) {
    //의상을 입지 않는 경우를 고려하기 위해 (clothesHash[key] + 1)을 곱합니다.
    answer *= clothesHash[key] + 1;
  }

  return answer - 1;
}

// hash 메소드 활용
function solution2(clothes) {
  const map = new Map();
  for (const [name, type] of clothes) {
    if (map.get(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  }
  let answer = 1;
  for (const [key, value] of map) {
    answer *= value + 1;
  }
  return answer - 1; // 아무것도 입지 않은 경우의 수를 빼준다.
}

console.log(
  solution([
    ['yellow_hat', 'headgear'],
    ['blue_sunglasses', 'eyewear'],
    ['green_turban', 'headgear'],
  ]),
);

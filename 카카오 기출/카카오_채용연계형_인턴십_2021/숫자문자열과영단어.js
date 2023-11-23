// level 1

const solution = s => {
  let answer = s
    .replaceAll('zero', '0')
    .replaceAll('one', '1')
    .replaceAll('two', '2')
    .replaceAll('three', '3')
    .replaceAll('four', '4')
    .replaceAll('five', '5')
    .replaceAll('six', '6')
    .replaceAll('seven', '7')
    .replaceAll('eight', '8')
    .replaceAll('nine', '9')
  return answer
}

function solution2(s) {
  let charSet = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  }

  for (let [key, value] of Object.entries(charSet)) {
    let re = new RegExp(key, 'g')
    s = s.replace(re, value)
  }
  return parseInt(s)
}

console.log(solution2('one4seveneight'))

function solution(array){
    return array.join('').split('').filter((v)=>v==='7').length
}

console.log(solution([7,77,17])) // 4
console.log(solution([10,29])) // 0

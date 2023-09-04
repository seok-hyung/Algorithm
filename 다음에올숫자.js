// 프로그래머스 level 2
function solution(common){
    if(common[2] - common[1] === common[1] - common[0]){
        return common.pop() + common[1] - common[0]
    }else{
        return common.pop() *(common[1] / common[0])
    }
}

console.log(solution([1,2,3,4])) // 5
console.log(solution([2,4,8])) // 16

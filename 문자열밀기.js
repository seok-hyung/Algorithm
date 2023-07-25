// 프로그래머스 level 0
function solution(A, B) {
    let arr = [...A]
    for(let i = 0; i< arr.length; i++){
        if(A === B)
            return i;
        else{
            arr.unshift(arr.pop())
            if(arr.join('') === B)
                return i+1;
        }
    }
    return -1;
}

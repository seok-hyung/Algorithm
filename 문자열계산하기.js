function solution(my_string) {
    let arr = my_string.split(' ')
    let answer = arr[0]*1
    arr.forEach((item,index)=>{
        if(item ==='+'){
            answer += parseInt(arr[index+1])
        }
        if(item === '-'){
            answer -= parseInt(arr[index+1])
        }
    })
    return answer
}


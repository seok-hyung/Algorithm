// 프로그래머스 level 1
function solution(array) {
    var answer = 0;
    let a = [];
    let temp = 0

    for(let i=0; i<array.length; i++){
        if(a.includes(array[i])==false){
            a.push(array[i])
        }
    }
    for(let i=0; i<a.length; i++){
        const count = array.filter(element => a[i] == element).length
        if(count>temp){
            temp = count
            answer = a[i]
        }
        else if(count == temp){
            answer = -1
        }
    }
    return answer;
}


// 프로그래머스 level 1
function solution(numList, n) {
    let result = []
    result = numList.sort((a, b) => {
        const [numA, numB] = [Math.abs(a - n), Math.abs(b - n)];
        if(numA === numB){
            return b - a;
        }
        return numA - numB;
    })
    return result;
}

// 다른 사람의 풀이
function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

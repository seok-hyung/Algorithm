// 프로그래머스 스택/큐 leve 1
function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}

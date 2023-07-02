// 프로그래머스 완전탬색 level 2
function solution(k, dungeons) {
    let answer = 0;
    const ch = Array.from({ length: dungeons.length }, _ => 0);
    
    const dfs = (fatigue, depth) => {
        answer = Math.max(answer, depth);
        
        for(const i in dungeons) {
            const [need, consume] = dungeons[i];
            if(!ch[i] && fatigue >= need) {
                ch[i] = 1;
                dfs(fatigue - consume, depth + 1);
                ch[i] = 0;
            }
        }
    }
    
    dfs(k, 0);
    
    return answer;
}

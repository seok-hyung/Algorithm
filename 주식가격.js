function solution(n){
    let result = []
    for (let i = 0; i < n.length; i++){
        let stack = n[i] // 현재 주식 가격
        let j = i + 1 // 비교 할 수의 index
        let temp = 0; // 가격이 떨어지지 않은 시간

        while(j < n.length + 1){ // j < 6 이면 진행
            if (stack <= n[j]){ // 1. 나의 주식 가격이 다음 주식 가격보다 작거나 같으면 통과.
                temp += 1;
                j += 1;
                continue; // if문 끝냄 while문으로
            }
            else if (temp == 0 && stack > n[j]){ // 2. 나의 주식 가격이 다음 주식 가격보다 크면 종료.
                temp = 1;
                result.push(temp);
                temp = 0;
                break; // while문 끝냄
            }
            else if (temp == 0 && j == n.length){ // 3. 마지막 주식이면 0 반환.
                console.log(j)
                result.push(temp);
                break; // while문 끝냄
            }
            result.push(temp)
            temp = 0;
            break;
        }
    }
    return result;
}

console.log(solution([1, 2, 3, 2, 3]))
// 문자열 my_string이 매개변수로 주어집니다. 
// my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// 입출력 예
// my_string	        result
// "people"	        "peol"
// "We are the world"	"We arthwold"

function solution(my_string){
    let s = new Set(my_string);
    return [...s].join('')
    
}
console.log(solution('people')) // peol
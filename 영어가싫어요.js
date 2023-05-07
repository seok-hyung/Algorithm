function solution(numbers) {
    let numStr = [ "zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ];

    numStr.forEach((item, index) => {
        numbers = numbers.replaceAll(item, index);
    });
    return Number(numbers);
}
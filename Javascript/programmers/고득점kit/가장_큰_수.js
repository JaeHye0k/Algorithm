function solution(numbers) {
    let copyNums = numbers
        .map((num, i) => {
            return [i, Number(num.toString().repeat(3))];
        })
        .sort((a, b) => {
            if (b[1] - a[1] === 0) return b[1] - a[1];
        });
    let answer = "";
    copyNums.forEach(([i, num]) => {
        answer += numbers[i].toString();
    });
    return Number(answer).toString();
}

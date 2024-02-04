function solution(numbers) {
    let answer = numbers
        .map(String)
        .sort((a, b) => b + a - (a + b))
        .join("");
    return String(BigInt(answer));
    //return String(Number(answer)) => 실패
}

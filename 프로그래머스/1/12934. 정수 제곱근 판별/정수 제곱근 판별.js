function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? Math.pow(Math.sqrt(n) + 1, 2) : -1;
}
/*
    x^2 = n
    x === 루트(n) 이면 x+1^2 을 반환
*/
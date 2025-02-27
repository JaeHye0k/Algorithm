function solution(arr) {
    return arr.reduce((acc, cur) => lcm(acc, cur));
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b); 
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
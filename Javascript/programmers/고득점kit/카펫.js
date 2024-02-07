function solution(brown, yellow) {
    // 1. brown+yellow 의 약수의 쌍 찾기
    let sum = brown + yellow;
    // 2. (가로-2)*(세로-2) == 노란색 격자의 수인 약수의 쌍 찾기
    // n을 1부터 n 제곱근 까지의 수로 나누었을 때 나누어 떨어지는 수는 n의 약수다.
    let n = Math.ceil(Math.sqrt(sum));
    for (let i = 1; i <= n; i++) {
        if (sum % i === 0) {
            let x = sum / i;
            let y = i;
            if ((x - 2) * (y - 2) == yellow) return [x, y];
        }
    }
}

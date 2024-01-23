// 메모이제이션을 사용하지 않은 피보나치 수열 O(2^N)
// function fibo1(x) {
//     if (x === 1 || x === 2) return 1;
//     return fibo1(x - 1) + fibo1(x - 2);
// }

// console.log(fibo1(99));
// ---------------------------------------------------------------------

// 메모이제이션 기법을 사용한 피보나치 수열 O(N)
// 한 번 계산된 결과를 메모이제이션 하기 위한 배열 생성
// const memo = Array(100).fill(0);
// function fibo2(x) {
//     if (x === 1 || x === 2) return 1;
//     // 이미 계산한 적이 있다면 전에 계산했던 값을 반환
//     if (memo[x] !== 0) return memo[x];
//     // 계산한 적이 없다면 계산 한 결과를 메모이제이션
//     memo[x] = fibo2(x - 1) + fibo2(x - 2);
//     return memo[x];
// }

//console.log(fibo2(99));
// ---------------------------------------------------------------------

// 오버헤드를 줄이고 재귀 제한을 예방하기 위해 재귀를 반복문으로 변경
const memo = Array(100).fill(0);
memo[1] = 1;
memo[2] = 1;
n = 99;

for (let i = 3; i <= n; i++) {
    memo[i] = memo[i - 1] + memo[i - 2];
}

console.log(memo[n]);

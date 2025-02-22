function solution(n) {
    let answer = 0;

    for (let k = 1; k <= Math.sqrt(n); k++) {
        if (n % k === 0) { // i가 n의 약수이고,
            if (k % 2 === 1) answer++; // 약수 i가 홀수라면 카운트 증가
            if ((n / k) % 2 === 1 && k !== Math.sqrt(n)) answer++; // n / i(다른 약수 쌍)도 홀수이면 카운트 증가(두 약수쌍이 동일할 때는 예외 ex. n=25 이고, i=5일때)
        }
    }

    return answer;
}

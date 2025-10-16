function solution(n) {
    const primes = new Array(n+1).fill(1);
    primes[0] = 0;
    primes[1] = 0;
        
    for(let i=2; i<=Math.sqrt(n); i++) {
        if(primes[i]) {
            let j=2;
            while(i * j <= n) {
                primes[i * j] = 0;
                j++;
            }
        }
    }
    
    return primes.filter(e => e === 1).length;
}

/*
    1차: 효율성 테스트 1, 2, 4 시간초과 (3m)
    log(1,000,000)2 = 약 20
    시간 복잡도 = 1,000,000 * 20 = 20_000_000
    
    1,000,000 - 2의 배수의 개수 - 3의 배수의 개수 - 4의 배수의 개수 - ... - 1,000,000의 배수의 개수
    1,000,000 / n = n의 배수의 개수
    
    2차: 에라토스테네스의 체
*/
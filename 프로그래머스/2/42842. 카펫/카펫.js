function solution(brown, yellow) {
   const [divisor1, divisor2] = getDivisor(brown + yellow);
   for(let i = 0; i < divisor1.length; i++) {
       if(isAnswer(divisor1[i], divisor2[i], brown)) {
            const x = Math.max(divisor1[i], divisor2[i]);
            const y = Math.min(divisor1[i], divisor2[i]);
            return [x, y];
       }
   }
}

function getDivisor(num) {
    const divisor1 = [];
    const divisor2 = [];
    let i = 1;
    while(i <= Math.sqrt(num)) {
        if(num % i === 0) {
            divisor1.push(i);
            divisor2.push(num / i);
        }
        i++;
    }
    return [divisor1, divisor2];
}

function isAnswer(x, y, brown) {
    return 2 * x + 2 * y === brown + 4;
}

/*
    (x >= y)
    2x + 2y - 4 = brown -> 2x + 2y = brown + 4
    xy - brown = yellow -> xy = yellow + brown
    x와 y는 yellow + brown 의 약수
    
    약수 구하기
    num = yellow + brown
    num 을 1 ~ num 의 제곱근으로 나누었을 때 나머지가 0이면 그때의 나눈 수와 몫이 num 의 약수
    
    2x + 2y = brown + 4 에 약수 짝 대입해보기
    
*/
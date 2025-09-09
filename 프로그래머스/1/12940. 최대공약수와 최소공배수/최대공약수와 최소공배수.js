function solution(n, m) {
    return [getGongYaksu(n, m), getGongBesu(n, m)];
}

function getGongYaksu(n, m) {
    const yaksuN = [];
    const yaksuM = [];
    
    const nm = Math.min(n, m);
    
    for(let i=nm; i>=1; i--) {
        if(n % i === 0) yaksuN.push(i);
        if(m % i === 0) yaksuM.push(i);
    }
    
    return yaksuN.find((e) => yaksuM.includes(e));
}

function getGongBesu(n, m) {
    let i=1;
    while(i % m || i % n) i++;
    return i;
}


// 최대공약수 * 최소공배수가 = n * m
// 공배수: 
// 공약수: 
// 약수: i는 1부터 n까지 1씩 증가하며 n이 i로 나누어 떨어지면 i는 n의 약수 
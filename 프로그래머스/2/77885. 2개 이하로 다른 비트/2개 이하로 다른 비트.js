function solution(numbers) {
    return numbers.map(f);
}

function f(x) {
    if(x % 2 === 0) {
        return x+1;
    }
    
    const bi = x.toString(2).padStart(50, '0');
    
    for(let i=bi.length-1; i>0; i--) {
        if(bi[i-1] + bi[i] === '01') {
            return parseInt(bi.slice(0, i-1) + '10' + bi.slice(i+1), 2);
        }
    }
}

/*
단순히 1씩 증가시켜서 확인하면 number가 10 ** 15이므로 시간초과가 발생함

x가 짝수라면, 이진수로 변환했을 때, 마지막 비트가 0이므로 이를 1로 바꿔주기만 하면 됨
001 = 1, 010 = 2, 011 = 3, 마지막 비트를 제외하고는 모두 2의 제곱수이기 때문에 짝수임
그러나 마지막 비트는 2^0 = 1이기 때문에 마지막 비트를 포함하면 짝수+홀수가 돼서 홀수가 됨

x가 홀수라면, 이진수로 변환했을 때, 마지막에 가까운 01을 10으로 변환하면 됨
그 반대(10을 01로 만드는 것)는 x보다 작은 수를 만들기 때문에 불가
*/
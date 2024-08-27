function solution(n, k) {
    let answer = 0;
    const kFormationNum = n.toString(k);

    for (let i = 0; i < kFormationNum.length; ) {
        while (kFormationNum[i] === '0') i++;
        let j = i;
        while (kFormationNum[j] !== '0' && j < kFormationNum.length) j++;
        const p = kFormationNum.slice(i, j);
        if (isPrimeNumber(+p)) answer++;
        i = j;
    }

    return answer;
}

function isPrimeNumber(num) {
    if (num === 0 || num === 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

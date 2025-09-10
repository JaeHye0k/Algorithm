function solution(t, p) {
    var answer = 0;
    const pLen = p.length;
    for(let i=0; i<=t.length-pLen; i++) {
        const str = t.slice(i, i+pLen);
        if(Number(str) <= Number(p)) answer++;
    }
    return answer;
}

/*
t를 p의 길이만큼 자르고 t와 p비교 ... 반복

5 - 2 = 3 0~2
10, 02, 20, 03
15
*/
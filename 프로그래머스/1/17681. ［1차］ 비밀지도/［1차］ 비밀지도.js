function solution(n, arr1, arr2) {
    var answer = [];
    for(let i=0; i<n; i++) {
        const bi1 = arr1[i].toString(2).padStart(n, "0");
        const bi2 = arr2[i].toString(2).padStart(n, "0");
        let low = "";
        for(let j=0; j<n; j++) {
            low += OR(bi1[j], bi2[j]);
        }
        answer.push(low);
    }
    return answer;
}

function OR(a, b) {
    return Number(a) || Number(b) ? "#" : " ";
}
/*
10진수를 2진수로 변환 -> 1은 벽, 0은 공백
1 1 = 1 = #
1 0 = 1 = #
0 1 = 1 = #
0 0 = 0 = " "
-> OR
*/
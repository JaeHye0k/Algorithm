function solution(s) {
    let answer = Infinity;
    
    for(let i=1; i<=s.length; i++){
       const chunkedArr = chunk(s, i);
       const compressedStr = compress(chunkedArr);
       answer = Math.min(answer, compressedStr.length);
    }
    
    return answer;
}

function chunk(s, unit) {
    const result = [];
    for(let i=0; i<s.length; i+=unit) {
        result.push(s.slice(i, i+unit));
    }
    return result;
}

function compress(arr) {
    if(arr.length === 1) return arr[0];
    
    let result = '';
    let base = arr[0]; // 비교 기준이 될 문자열
    let count = 1; // 동일한 문자열 반복 횟수
    
    for(let i=1; i<arr.length; i++){
        if(base === arr[i]) count++;
        else {
            result += `${count === 1 ? '' : count}${base}`
            base = arr[i];
            count = 1;
        }
    }
    
    result += `${count === 1 ? '' : count}${base}`
    
    return result;
}

/*
n = s.length
j= 1 ~ n (자를 단위)
반복의 정의: dp[i] === dp[i+j] === dp[i+2j] ... n-1까지


*/
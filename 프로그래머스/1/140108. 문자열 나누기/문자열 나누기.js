function solution(s) {
    var answer = 0;
    let x = null;
    let count = 0;
    
    for(let i=0; i<s.length; i++) {
        if(x === null) x = s[i];
        if(s[i] === x) count++;
        else count--;
        if(count === 0) {
            answer++;
            x = null;
        }
    }
    
    if(count !== 0) answer++;
    
    return answer;
}


/*
a = x의 개수
b = x가 아닌 문자의 개수
a === b라면 카운트 증가
x 갱신
*/
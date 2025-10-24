function solution(s) {
    var answer = 0;
    let x = null;
    let xCount = 0;
    let notXCount = 0;
    
    for(let i=0; i<s.length; i++) {
        if(x === null) x = s[i];
        if(s[i] === x) xCount++;
        else notXCount++;
        if(xCount === notXCount) {
            answer++;
            x = null;
            xCount = 0;
            notXCount =0;
        }
    }
    
    if(xCount !== 0) answer++;
    
    return answer;
}


/*
a = x의 개수
b = x가 아닌 문자의 개수
a === b라면 카운트 증가
x 갱신
*/
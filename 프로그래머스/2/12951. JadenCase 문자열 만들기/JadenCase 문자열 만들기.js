function solution(s) {
    let answer = '';
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z') {
            if(s[i-1] === ' ' || s[i-1] === undefined) {
                answer += s[i].toUpperCase();
                continue;
            }
        } 
        
        answer += s[i].toLowerCase();
    }
    
    return answer;
}

/*
1. 공백이 연속으로 두 개가 붙어있을 수도 있음
2. 현재 인덱스가 가리키는 문자가 알파벳이고, 이전 문자가 공백이거나 undefined(첫 번째 문자)라면 단어의 첫 번째 글자이므로 대문자로 변환.
*/
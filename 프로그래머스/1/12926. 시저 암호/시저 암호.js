function solution(s, n) {
    var answer = '';
    const a = 'a'.codePointAt(0);
    const z = 'z'.codePointAt(0);
    const A = 'A'.codePointAt(0);
    const Z = 'Z'.codePointAt(0);
    
    for(let i=0; i<s.length; i++) {
        const codePoint = s[i].codePointAt(0) + n;
        
        if('a' <= s[i] && s[i] <= 'z') {
            answer += String.fromCodePoint(codePoint > z  ? codePoint % z + a - 1 : codePoint);
        } else if('A' <= s[i] && s[i] <= 'Z') {
            answer += String.fromCodePoint(codePoint > Z  ? codePoint % Z + A - 1 : codePoint);
        } else {
            answer += ' ';
        }
        
    }
    return answer;
}

/*
    각 문자의 아스키 코드 + n = 밀린 문자의 아스키 코드
    밀린 문자의 아스키 코드 -> 문자로 변환
    공백일 경우 skip
    z 를 넘어가서 a로 돌아오는 경우 처리하기
        - 소문자 z 는 소문자 a로 돌아오고, 대문자 Z는 대문자 A로 돌아오게 
*/
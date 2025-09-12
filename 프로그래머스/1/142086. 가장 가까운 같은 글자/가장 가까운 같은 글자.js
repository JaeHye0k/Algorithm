function solution(s) {
    const answer = [];
    const charMap = new Map();
    for(let i=0; i<s.length; i++) {
        if(charMap.has(s[i])) {
            answer.push(i - charMap.get(s[i]));
        } else {
            answer.push(-1);
        }
        charMap.set(s[i], i)
    }
    return answer;
}
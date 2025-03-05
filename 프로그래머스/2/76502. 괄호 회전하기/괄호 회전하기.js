function solution(s) {
    const arr = s.split('');
    let answer = 0;
    for(let i = 0; i < s.length; i++) {
        answer += checkPair(arr) ? 1 : 0;
        rotate(arr);
    }
    return answer;
}

function rotate(s) {
    const char = s.shift();
    s.push(char);
}

function checkPair(s) {
    const stack = [];
    
    const pair = {
        ')': '(',
        '}': '{',
        ']': '['
    };     
    
    for(let i = 0; i < s.length; i++) {
        const cur = s[i];
        const top = stack.at(-1);
        
        if(pair[cur]) {
             // 닫는 괄호가 나오면 stack의 top이랑 비교하기
            if(pair[cur] === top) stack.pop();
            else return false;
        } 
        else {
            // 여는 괄호가 나오면 stack에 push 하기
            stack.push(cur);
        }
    }
    
    return stack.length === 0;
}

/*
    1. 회전하는 로직 (shift, push 를 이용)
    2. 올바른 괄호 문자열인지 확인하는 로직
        -> 올바른 괄호 문자열 = 괄호 쌍이 잘 맞는 문자열
*/
function solution(s){
    let open = 0;
    for(let i = 0; i < s.length; i++) {
        switch(s[i]) {
            case '(': {
                open++;
                break;
            }
            case ')': {
                if(open === 0) return false;
                open--;
            }
        }
    }
    if(open > 0) return false;
    else return true;
}

/*
    1. 여는 괄호라면 스택에 push.
    2. 닫는 괄호라면 스택에서 여는 괄호를 pop.
        2-1. 스택에 여는 괄호가 없다면 즉시 false 리턴
    3. 끝났을 때 스택에 괄호가 남아있다면 false 리턴
    4. 아니라면 true 리턴
*/
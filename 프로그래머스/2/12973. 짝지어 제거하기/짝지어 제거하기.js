function solution(s)
{
    var answer = -1;
    const stack = [];
    
    for(let i = 0; i < s.length; i++) {
        const top = stack.length - 1;
        if(stack[top] === s[i]) stack.pop();
        else stack.push(s[i]);
    }
    
    
    return stack.length ? 0 : 1;
}

/*
1. 가장 단순한 방법은 문자열 S를 처음부터 끝까지 순회하며 현재 문자와 다음 문자를 비교한 뒤 같다면 splice 를 이용해 제거한 다음 짝이 나오지 않을 때까지 반복하기
    -> 시간 복잡도는 O(N^2) 이라 시간초과

2. S를 처음부터 끝까지 순회하며 현재 인덱스의 문자를 스택에 넣고, 그 다음 문자가 stack[top] 에 들어있는 문자와 동일하다면 pop 하기.
만약 순회를 종료한 이후에도 stack 이 비어있지 않다면 0반환

*/
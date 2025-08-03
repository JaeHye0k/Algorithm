function solution(order) {
    var answer = 0;
    const stack = [];
    
    for(let i=1; i<=order.length; i++) {
        stack.push(i);
        
        while(stack.length && stack.at(-1) === order[answer]) {
            stack.pop();
            answer++;
        }
    }
    
    return answer;
}

/*
    문제 이해: 
        [4, 3, 1, 2, 5]인 경우 4번 박스 -> 3번 박스 -> 1번 박스 -> 2번 박스 -> 5번 박스 순서대로 넣으라는 뜻
        => boxes[order[i]]번째 박스를 트럭에 실어라
    
*/
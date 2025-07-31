function solution(prices) {
    var answer = [];
    const stack = [];
    for(let i=0; i<prices.length; i++) {
        while(stack.at(-1)?.price > prices[i]) {
            const top = stack.pop();
            answer[top.time] = i - top.time;
        }
        stack.push({time: i, price: prices[i]});
    }
    
    while(stack.length) {
        const { time, price } = stack.pop();
        answer[time] = prices.length - time - 1;
    }
    
    return answer;
}

/*
    1. stack에 요소가 얼마나 있었는지 알아야 함. (현재 시간 - 요소가 스택에 들어간 시간 = stack에 있던 시간 )
    i=0; i<prices.length; i++;
        while(stack.at(-1).price > prices[i])
            top = stack.pop();
            answer[top.time] = i - top.time

*/
function solution(numbers) {
    const stack = [];
    const answer = new Array(numbers.length).fill(-1);
    
    for(let i=0; i<numbers.length; i++) {
        while(stack.length && numbers[stack.at(-1)] < numbers[i]) {
            answer[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }
    
    return answer;
}

/*
    참고자료: https://velog.io/@sean2337/Programmers-%EB%92%A4%EC%97%90-%EC%9E%88%EB%8A%94-%ED%81%B0-%EC%88%98-%EC%B0%BE%EA%B8%B0-JavaScript
*/
function solution(answers) {
    const answer = [];
    const one = [1,2,3,4,5];
    const two = [2,1,2,3,2,4,2,5];
    const three = [3,3,1,1,2,2,4,4,5,5];
    
    const points = [0, 0, 0];
    
    for(let i=0; i<answers.length; i++) {
        if(answers[i] === one[i % one.length]) points[0]++;
        if(answers[i] === two[i % two.length]) points[1]++;
        if(answers[i] === three[i % three.length]) points[2]++;
    }
    
    const max = Math.max(...points);
    points.forEach((e, i) => {
        if(max === e) answer.push(i+1);
    })
    
    return answer.sort((a, b) => a - b);
}

/*
answers를 모두 순회할 때까지 찍기 배열을 반복해서 순회

*/
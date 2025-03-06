function solution(elements) {
    const answer = new Set();
    const n = elements.length;
    const arr = [...elements, ...elements];
    const acc = new Array(n).fill(0); 
    
    // i = 부분 수열의 길이
    for(let i = 0; i < n; i++) {    
        for(let j = 0; j < n; j++) {
            acc[j] += arr[i + j];
            answer.add(acc[j]);
        }
    }
    
    return answer.size;
}

/*  
    처음이랑 끝이랑 처음이랑 이어지도록 배열 구성 [1, 2, 3, 4] -> [1, 2, 3, 4, 1, 2, 3]  
*/
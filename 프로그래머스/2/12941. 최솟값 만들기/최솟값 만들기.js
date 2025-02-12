function solution(A,B){
    A.sort((a, b) => a - b); // 오름차순
    B.sort((a, b) => b - a); // 내림차순
    let answer = 0;    
    for(let i = 0; i < A.length; i++) {
        answer += A[i] * B[i];
    }

    return answer;
}

/*
1. 큰 수와 작은 수가 곱해져야됨
2. 하나는 오름차순, 하나는 내림차순 정렬
3. 길이가 같다고 했으니 같은 인덱스끼리 곱해서 누적하기
*/
function solution(n) {
    var answer = 0;
    const arr = Array.from({length: n+1}, (_, i) => i);
    let [start, end] = [1,1];
    
    while(end <= n && start <= end) {
        const sum = getSum(start, end, arr);
        if(sum === n) answer++;
        if(sum >= n) start++;
        if(sum < n) end++;
    }
    
    return answer;
}

function getSum(start, end, arr) {
    return (arr[start] + arr[end]) * (end - start + 1) / 2;
}

/*
n을 연속한 자연수들로 표현하는 방법이 여러개다. (곱하기 빼기 나누기도 가능한건지 모호함)
일단 더하기로만 연결해보기

1. n+1 길이의 배열 생성
2. start = 1, end = 1
3. start 부터 end 까지의 합: (arr[start] + arr[end]) * (end - start + 1) / 2

1. sum = (arr[start] + arr[end]) * (end - start + 1) / 2
2. sum을 n과 비교한다.
    2-1. sum이 n과 동일하면 answer를 1 증가시킨다.
    2-2. sum이 n보다 크거나 같다면 (sum을 작게 만들어야 하므로) start를 1 증가시킨다.
    2-3. sum이 n보다 작다면 (sum을 크게 만들어야 하므로) end를 1증가시킨다.
3. end가 n보다 크거나, start 가 end 보다 크다면 종료한다.
*/
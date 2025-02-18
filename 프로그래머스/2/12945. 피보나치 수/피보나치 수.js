function solution(n) {
    const arr = new Array(n + 1).fill(0);
    arr[0] = 0;
    arr[1] = 1;
    for(let i = 2; i <= n; i++) {
        arr[i] = (arr[i-1] + arr[i-2]) % 1234567;
    }
    
    return arr[n] % 1234567;
} 



/*
일반적인 재귀함수를 이용한 피보나치 풀이는 O(2^n) 이므로 안됨
-> 메모이제이션 활용
1. 100,001 길이의 배열 생성
2. F(n) 의 결과를 arr[n]에 저장
3. F(n-1) + F(n-2) 재귀 돌기
4. F(n) 의 결과가 이미 arr[n]에 저장되어 있다면 저장되어있는 결과 바로 리턴


1. 재귀함수로 하니까 Maximum call stack size exceeded 에러 뜸
2. 테스트 7 ~ 테스트 14 까지 실패
*/
function solution(n) {
    if(n === 1) return 1;
    if(n === 2) return 2;
    let acc1 = 1;
    let acc2 = 2;
    let acc3 = 0;
    for(let i=3; i<=n; i++) {
        acc3 = (acc1 + acc2) % 1_000_000_007;
        acc1 = acc2;
        acc2 = acc3;
        
    }
    return acc3;
}

/*
    전체 가로 길이 = n
    블록을 세로로 놓을 경우 n-1
    블록을 가로로 놓을 경우 n-2
    각 경우에 대해 2가지 경우(n-1, n-2)가 있으므로 O(2^n) -> 시간초과 -> 메모이제이션 필요
    DP적용 O(n) -> 시간초과 -> 왜?
*/
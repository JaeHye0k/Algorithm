function solution(n) {
    const dp = new Array(n+1).fill(0);
    dp[0] = dp[1] = 1;
    
    for(let i = 2; i <= n; i++) {
        dp[i] = (dp[i-1] + dp[i-2]) % 1234567;
    }
    
    return dp[n];
}

/*
    1칸 또는 2칸씩 이동할 수 있을 때, n칸까지 가기 위한 모든 경우의 수
    
    arr[n] = arr[n-1] + arr[n-2];
*/
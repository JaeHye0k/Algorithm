function solution(n, left, right) {
    const answer = [];
    for(let idx = left; idx <= right; idx++) {
        const row = Math.floor(idx / n);
        const col = idx % n;
        answer.push(Math.max(row, col) + 1);
    }
    return answer;
}

/*
    2차원 배열의 크기 10^14 이므로 데이터를 일일히 채워주면 시간 초과
    1차원 배열의 인덱스를 2차원 배열의 인덱스로 전환하는 법 = index / n = i...j
    arr[i][j] = Max(i,j) + 1
*/
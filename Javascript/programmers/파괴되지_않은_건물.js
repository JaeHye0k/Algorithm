function solution(board, skill) {
    const N = board.length;
    const M = board[0].length;
    const prefixSum = Array.from(Array(N + 1), () => Array(M + 1).fill(0));
    let answer = 0;

    // 누적합
    for (let [type, r1, c1, r2, c2, degree] of skill) {
        // 공격일 경우 감소
        if (type === 1) degree *= -1;
        prefixSum[r1][c1] += degree;
        prefixSum[r1][c2 + 1] -= degree;
        prefixSum[r2 + 1][c1] -= degree;
        prefixSum[r2 + 1][c2 + 1] += degree;
    }

    // 행 기준 누적합
    for (let i = 0; i <= N; i++) {
        for (let j = 0; j < M; j++) {
            prefixSum[i][j + 1] += prefixSum[i][j];
        }
    }

    // 열 기준 누적합
    for (let i = 0; i < N; i++) {
        for (let j = 0; j <= M; j++) {
            prefixSum[i + 1][j] += prefixSum[i][j];
        }
    }

    // 누적합을 board에 적용
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            board[i][j] += prefixSum[i][j];
            if (board[i][j] > 0) answer++;
        }
    }

    return answer;
}

console.log(
    solution(
        [
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
            [5, 5, 5, 5, 5],
        ],
        [
            [1, 0, 0, 3, 4, 4],
            [1, 2, 0, 2, 3, 2],
            [2, 1, 0, 3, 1, 2],
            [1, 0, 1, 3, 3, 1],
        ]
    )
);

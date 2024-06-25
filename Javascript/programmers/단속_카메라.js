function solution(routes) {
    let answer = 0;
    let startPoint = -30001;
    routes.sort((a, b) => a[1] - b[1]);

    for (const [IN, OUT] of routes) {
        if (startPoint <= OUT) {
            // 진입지점 <= startPoint <= 진출지점
            if (startPoint >= IN) {
                continue;
            } else {
                startPoint = OUT;
                answer++;
            }
        }
    }
    return answer;
}

console.log(
    solution([
        [-20, -15],
        [-14, -5],
        [-18, -13],
        [-5, -3],
    ])
);

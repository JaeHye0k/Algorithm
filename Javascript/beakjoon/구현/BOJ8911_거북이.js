const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let T;
const control = [];
rl.on('line', (line) => {
    if (!T) T = +line;
    else control.push(line.split(''));
    if (control.length === T) rl.close();
}).on('close', () => {
    solution();
});

function solution() {
    const dx = [0, 1, 0, -1];
    const dy = [-1, 0, 1, 0];
    let answer = '';
    for (let i = 0; i < T; i++) {
        let [x, y] = [0, 0]; // 초기 위치
        let [maxX, maxY, minX, minY] = [0, 0, 0, 0];
        let d = 0; // 초기 방향 (0~3)
        for (let action of control[i]) {
            if (action === 'L') d = d === 0 ? 3 : d - 1;
            else if (action === 'R') d = (d + 1) % 4;
            else if (action === 'F') {
                x += dx[d];
                y += dy[d];
            } else if (action === 'B') {
                x -= dx[d];
                y -= dy[d];
            }
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
        }
        const squre = getSqure(maxX, maxY, minX, minY);
        answer += squre + '\n';
    }

    console.log(answer.trimEnd());

    function getSqure(maxX, maxY, minX, minY) {
        const width = maxX - minX;
        const height = maxY - minY;
        return width * height;
    }
}

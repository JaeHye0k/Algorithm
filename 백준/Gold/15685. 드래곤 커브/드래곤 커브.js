const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
let curve = [];

rl.on('line', (line) => {
    if (!N) N = +line;
    else curve.push(line.split(' ').map(Number));
    if (curve.length === N) rl.close();
}).on('close', () => {
    console.log(solution());
});

function solution() {
    let answer = 0;
    const map = Array.from(Array(101), () => Array(101).fill(0));
    const dir = {
        0: [1, 0],
        1: [0, -1],
        2: [-1, 0],
        3: [0, 1],
    };

    for (let [x, y, d, g] of curve) {
        dragonCurve(x, y, d, g);
    }

    countRect();

    return answer;

    function dragonCurve(x, y, d, g) {
        map[y][x] = 1;
        let order = [d];
        let newOrder = [];
        for (let i = 0; i <= g; i++) {
            for (let j = order.length - 1; j >= 0; j--) {
                const [dx, dy] = dir[order[j]];
                x += dx;
                y += dy;
                if (y <= 100 && x <= 100 && y >= 0 && x >= 0) map[y][x] = 1;
                newOrder.push((order[j] + 1) % 4);
            }
            order = [...newOrder];
        }
    }

    function countRect() {
        for (let i = 0; i < 100; i++) {
            for (let j = 0; j < 100; j++) {
                if (map[i][j] && map[i + 1][j] && map[i][j + 1] && map[i + 1][j + 1]) answer++;
            }
        }
    }
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const visited = Array(9).fill(false);
let answer = 0;
dfs([]);
console.log(answer);

function dfs(players) {
    if (players.length === 9) play([...players]); // 종료 조건
    else if (players.length === 3) dfs([...players, 0]);
    else {
        for (let i = 1; i <= 8; i++) {
            if (!visited[i]) {
                visited[i] = true;
                dfs([...players, i]);
                visited[i] = false;
            }
        }
    }
}

function play(playersTurnList) {
    let score = 0;
    let order = 0;

    for (let i = 0; i < N; i++) {
        const players = arr[i];
        let out = 0;
        let base1 = 0;
        let base2 = 0;
        let base3 = 0;

        while (out < 3) {
            if (order === 9) order = 0;

            const result = players[playersTurnList[order]];

            if (result === 0) out += 1;
            else if (result === 1) {
                score += base3;
                base3 = base2;
                base2 = base1;
                base1 = 1;
            } else if (result === 2) {
                score += base3 + base2;
                base3 = base1;
                base2 = 1;
                base1 = 0;
            } else if (result === 3) {
                score += base3 + base2 + base1;
                base3 = 1;
                base2 = base1 = 0;
            } else if (result === 4) {
                score += base3 + base2 + base1 + 1;
                base3 = base2 = base1 = 0;
            }
            order += 1;
        }
    }
    answer = Math.max(answer, score);
}

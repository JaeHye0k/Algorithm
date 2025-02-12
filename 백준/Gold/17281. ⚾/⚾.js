const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const innings = input.slice(1).map((e) => e.split(' ').map(Number));
const visited = Array(9).fill(false);
let answer = 0;

permutation([]);
console.log(answer);

function permutation(inning) {
    if (inning.length === 9) {
        play(inning);
        return;
    } else if (inning.length === 3) permutation([...inning, 0]);
    else {
        for (let i = 1; i < 9; i++) {
            if (!visited[i]) {
                visited[i] = true;
                permutation([...inning, i]);
                visited[i] = false;
            }
        }
    }
}

function play(battingOrder) {
    let order = 0;
    let score = 0;
    for (let inning of innings) {
        let out = 0;
        let base1 = 0;
        let base2 = 0;
        let base3 = 0;
        while (out < 3) {
            const result = inning[battingOrder[order++ % 9]];
            if (result === 0) out++;
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
        }
    }
    answer = Math.max(answer, score);
}

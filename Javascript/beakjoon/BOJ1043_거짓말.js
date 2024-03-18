const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const [peopleCount, ...peopleKnowTruth] = input[1].split(' ').map(Number);
const party = input.slice(2).map((e) => e.split(' ').map(Number));
const truth = new Set(peopleKnowTruth);
let answer = 0;

for (let i = 0; i < M; i++) {
    for (let j = 1; j <= party[i][0]; j++) {
        if (truth.has(party[i][j])) {
            party[i].slice(1).forEach((e) => truth.add(e));
            break;
        }
    }
}
for (let i = 0; i < M; i++) {
    let known = false;
    for (let j = 1; j <= party[i][0]; j++) {
        if (truth.has(party[i][j])) {
            known = true;
            break;
        }
    }
    if (!known) answer++;
}
console.log(answer);

// 반례
// input
// 5 4
// 1 5
// 2 1 2
// 2 2 3
// 2 3 4
// 2 4 5

// ans
// 0

// wrong output
// 2

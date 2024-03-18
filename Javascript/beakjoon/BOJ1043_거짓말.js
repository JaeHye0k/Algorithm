const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const [peopleCount, ...peopleKnowTruth] = input[1].split(' ').map(Number);
const party = input.slice(2).map((e) => e.split(' ').map(Number));
const truth = new Set(peopleKnowTruth);
let answer = 0;

// 첫 번째 파티에서 부터 마지막 파티까지 진실을 알고 있는 사람의 집합을 구한다.
for (let i = 0; i < M; i++) {
    for (let j = 1; j <= party[i][0]; j++) {
        if (truth.has(party[i][j])) {
            party[i].slice(1).forEach((e) => truth.add(e));
            break;
        }
    }
}
// 마지막 파티에서 부터 첫번째 파티까지 진실을 알고 있는 사람의 집합을 구한다.
for (let i = M - 1; i >= 0; i--) {
    for (let j = 1; j <= party[i][0]; j++) {
        if (truth.has(party[i][j])) {
            party[i].slice(1).forEach((e) => truth.add(e));
            break;
        }
    }
}
// 진실을 알고 있는 사람이 포함된 파티라면 카운트하지 않고, 포함되어있지 않다면 카운트한다.
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
// 6 5
// 1 4
// 2 1 2
// 2 2 3
// 2 3 4
// 2 2 5
// 2 5 6

// ans
// 0

// wrong output
// 1

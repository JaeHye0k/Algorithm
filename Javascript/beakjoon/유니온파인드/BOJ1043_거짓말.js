const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const [peopleCount, ...peopleKnowTruth] = input[1].split(' ').map(Number);
const party = input.slice(2).map((e) => e.split(' ').map(Number));
const parent = Array(N + 1);
for (let i = 0; i <= N; i++) {
    parent[i] = i;
}
let answer = M;

// 같은 파티에 있는 사람들의 번호끼리 집합으로 연결한다.
for (let i = 0; i < M; i++) {
    for (j = 1; j < party[i][0]; j++) {
        union(party[i][j], party[i][j + 1]);
    }
}

// 진실을 아는 사람이 파티에 포함되어 있을 경우 해당 파티에서는 거짓말을 하지 못하므로 카운트를 1 감소시킨다.
for (let i = 0; i < M; i++) {
    for (j = 0; j < peopleCount; j++) {
        if (find(peopleKnowTruth[j]) === find(party[i][1])) {
            answer--;
            break;
        }
    }
}

console.log(answer);

function union(a, b) {
    a = find(a);
    b = find(b);
    if (a < b) parent[b] = a;
    else parent[a] = b;
}

function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
}

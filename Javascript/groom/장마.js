const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N, M, k;
let se = [];

rl.on('line', (line) => {
    if (!N && !M) [N, M] = line.split(' ').map(Number);
    else if (!k) k = line.split(' ').map(Number);
    else se.push(line.split(' ').map(Number));
    if (se.length === M) rl.close();
}).on('close', () => {
    solution(N, M, k, se);
    process.exit();
});

function solution(N, M, k, se) {
    const raindHouse = new Set();

    for (let i = 0; i < M; i++) {
        const [s, e] = se[i];
        // 비
        for (let j = s - 1; j < e; j++) {
            k[j]++;
            raindHouse.add(j);
        }
        // 배수 시스템
        if ((i + 1) % 3 === 0) {
            for (let house of raindHouse) {
                k[house]--;
            }
            raindHouse.clear();
        }
    }
    console.log(k.join(' '));
}

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const union = input.slice(1).map(Number);
union.sort((a, b) => b - a); // 내림차순 정렬
const sum = new Set();

for (let x = 0; x < N; x++) {
    for (let y = x; y < N; y++) {
        sum.add(union[x] + union[y]);
    }
}

for (const k of union) {
    for (const z of union) {
        if (sum.has(k - z)) {
            console.log(k);
            process.exit();
        }
    }
}

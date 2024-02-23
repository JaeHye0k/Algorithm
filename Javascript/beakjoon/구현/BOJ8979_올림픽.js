const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const medals = input.map((row) => row.split(' ').map(Number));
const [N, K] = medals.shift();
medals.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    else if (b[2] !== a[2]) return b[2] - a[2];
    else return b[3] - a[3];
});
let idx = medals.findIndex((e) => e[0] === K);
for (let i = 0; i < N; i++) {
    if (JSON.stringify(medals[idx].slice(1)) === JSON.stringify(medals[i].slice(1))) {
        console.log(i + 1);
        break;
    }
}

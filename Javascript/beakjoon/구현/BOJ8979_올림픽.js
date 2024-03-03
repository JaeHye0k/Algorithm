const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const medals = input.slice(1).map((e) => e.split(' ').map(Number));

// 금,은,동이 많은 순서대로 정렬
medals.sort((a, b) => {
    if (b[1] !== a[1]) return b[1] - a[1];
    else if (b[2] !== a[2]) return b[2] - a[2];
    else return b[3] - a[3];
});
// K나라의 인덱스
let idx = medals.findIndex((e) => e[0] === K);

for (let i = 0; i < N; i++) {
    if (JSON.stringify(medals[idx].slice(1)) === JSON.stringify(medals[i].slice(1))) {
        console.log(i + 1);
        break;
    }
}

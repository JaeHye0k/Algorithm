const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const young = Array.from({ length: N }, () => []);
const old = Array.from({ length: N }, () => []);

let youngMinHappy = Number.MAX_SAFE_INTEGER;
let youngMaxTired = 0;
let oldMaxHappy = 0;
let oldMinTired = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < N; i++) {
    if (arr[i][0] < youngMinHappy && arr[i][0] !== 0) youngMinHappy = arr[i][0];
    if (arr[i][1] > youngMaxTired && arr[i][1] !== 0) youngMaxTired = arr[i][1];

    young[i] = [youngMinHappy, youngMaxTired];
}

for (let i = N - 1; i >= 0; i--) {
    if (arr[i][0] > oldMaxHappy && arr[i][0] !== 0) oldMaxHappy = arr[i][0];
    if (arr[i][1] < oldMinTired && arr[i][1] !== 0) oldMinTired = arr[i][1];

    old[i] = [oldMaxHappy, oldMinTired];
}

let answer = 0;
for (let i = 0; i < N - 1; i++) {
    if (young[i][0] > old[i + 1][0] && young[i][1] < old[i + 1][1]) answer = i + 1;
}
console.log(answer ? answer : -1);

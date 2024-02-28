const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let [N, T] = input[0].split(' ').map(Number);
const carrots = input.slice(1).map((e) => e.split(' ').map(Number));
// w + p * T기준으로 내림차순 정렬
// 가장 기댓값이 큰 당근이 맨 앞으로 오고, 그 당근을 T일에 먹으면 됨
carrots.sort((a, b) => b[0] + b[1] * T - (a[0] + a[1] * T));
const answer = carrots.reduce((acc, cur) => (acc += cur[0] + cur[1] * --T), 0);
console.log(answer);

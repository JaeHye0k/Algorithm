const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const books = input[1].split(' ').map(Number);
const positive = [];
const negative = [];
for (const book of books) {
    if (book > 0) positive.push(book);
    else negative.push(book * -1);
}
positive.sort((a, b) => b - a);
negative.sort((a, b) => b - a);

let answer = 0;
for (let i = 0; i < positive.length; i += M) {
    answer += positive[i] * 2;
}
for (let i = 0; i < negative.length; i += M) {
    answer += negative[i] * 2;
}

if (positive[0] === undefined) positive[0] = 0;
if (negative[0] === undefined) negative[0] = 0;

if (positive[0] > negative[0]) answer -= positive[0];
else answer -= negative[0];

console.log(answer);

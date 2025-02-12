const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const G = +require('fs').readFileSync(filePath).toString().trim();

const arr = Array(G + 1).fill(0);
for (let i = 1; i <= G; i++) {
    arr[i] = i ** 2;
}
let left = 1;
let right = 2;
let answer = '';
while (left < right && right <= G) {
    if (arr[right] - arr[left] === G) {
        answer += `${right}\n`;
        left += 1;
    } else if (arr[right] - arr[left] < G) right += 1;
    else left += 1;
}
console.log(answer.trimEnd() || -1);

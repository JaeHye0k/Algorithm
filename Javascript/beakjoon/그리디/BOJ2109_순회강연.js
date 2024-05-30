const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const n = +input[0];
const pd = [];
let maxDay = 0;
for (let i = 1; i <= n; i++) {
    const [pay, day] = input[i].split(' ').map(Number);
    pd.push([pay, day]);
    maxDay = Math.max(maxDay, day);
}
// 강연료 내림차순 정렬
pd.sort((a, b) => b[0] - a[0]);

const days = Array(maxDay + 1).fill(0);
for (let [pay, day] of pd) {
    if (days[day] === 0) days[day] = pay;
    else {
        for (let i = day - 1; i >= 1; i--) {
            if (days[i] === 0) {
                days[i] = pay;
                break;
            }
        }
    }
}

console.log(days.reduce((acc, cur) => acc + cur, 0));

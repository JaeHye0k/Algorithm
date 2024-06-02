const filePath = process.platform === 'linux' ? '/dev/stdin' : 'Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
const point = ['000', '001', '010', '011', '100', '101', '110', '111'];
let idx = 1;
let answer = '';
while (T--) {
    const [a, b, c, d] = input[idx++].split(' ').map(Number);
    const rect = [point[a], point[b], point[c], point[d]];
    let count = Array(4).fill(0);
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (i === j) continue;
            const binary = (parseInt(rect[i], 2) ^ parseInt(rect[j], 2)).toString(2);
            const diff = 3 - binary.match(/1/g)?.length || 0;
            if (diff === 2) count[i]++;
        }
    }
    if (count.every((e) => e === 2)) answer += 'YES\n';
    else answer += 'NO\n';
}

console.log(answer.trimEnd());

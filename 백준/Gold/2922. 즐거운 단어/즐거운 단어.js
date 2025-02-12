const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const cons = ['A', 'E', 'I', 'O', 'U'];
const vowel = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let answer = 0;
const idx = input.indexOf('_');
if (idx === -1) answer = 1;
else fillBlank(input, idx, '');

console.log(answer);

function fillBlank(s, idx, ch) {
    if (!s.includes('_')) {
        if (isPossible(s)) {
            let temp = 1;
            for (let c of ch) {
                if (c === 'A') temp *= 5;
                else if (c === 'B') temp *= 20;
            }
            answer += temp;
        }
        return;
    }
    for (let i = idx; i < s.length; i++) {
        if (s[i] === '_') {
            s = s.slice(0, i) + 'A' + s.slice(i + 1);
            fillBlank(s, i + 1, ch + 'A');
            s = s.slice(0, i) + 'B' + s.slice(i + 1);
            fillBlank(s, i + 1, ch + 'B');
            s = s.slice(0, i) + 'L' + s.slice(i + 1);
            fillBlank(s, i + 1, ch + 'L');
            return;
        }
    }
}

function isPossible(s) {
    if (!s.includes('L')) return false;
    for (let i = 0; i < s.length - 2; i++) {
        if (cons.includes(s[i]) && cons.includes(s[i + 1]) && cons.includes(s[i + 2])) return false;
        if (vowel.includes(s[i]) && vowel.includes(s[i + 1]) && vowel.includes(s[i + 2])) return false;
    }
    return true;
}

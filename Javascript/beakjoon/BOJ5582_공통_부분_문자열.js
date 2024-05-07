const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [str1, str2] = require('fs').readFileSync(filePath).toString().trim().split('\n');
const LCS = Array.from({ length: str1.length + 1 }, () => Array(str2.length + 1).fill(0));
let answer = 0;

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            LCS[i + 1][j + 1] = LCS[i][j] + 1;
            answer = LCS[i + 1][j + 1] > answer ? LCS[i + 1][j + 1] : answer;
        } else LCS[i + 1][j + 1] = 0;
    }
}

console.log(answer);

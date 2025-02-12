const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [str1, str2] = require('fs').readFileSync(filePath).toString().trim().split('\n');
str1.trimEnd();
let answer = 0;

const dp = Array(str1.length).fill(0);
for (let i = 0; i < str2.length; i++) {
    for (let j = str1.length - 1; j >= 0; j--) {
        if (str2[i] === str1[j]) {
            if (j === 0) dp[j] = 1;
            else dp[j] = dp[j - 1] + 1;
            answer = dp[j] > answer ? dp[j] : answer;
        } else dp[j] = 0;
    }
}

console.log(answer);
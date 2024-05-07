const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [str1, str2] = require('fs').readFileSync(filePath).toString().trim().split('\n');
let answer = 0;

function recursion(i, j, str) {
    if (str1[i] === str2[j]) {
        recursion(i + 1, j + 1, str + str1[i]);
    } else {
        answer = str.length > answer ? str.length : answer;
    }
}

for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        if (str1[i] === str2[j]) {
            recursion(i, j, '');
        }
    }
}

console.log(answer);

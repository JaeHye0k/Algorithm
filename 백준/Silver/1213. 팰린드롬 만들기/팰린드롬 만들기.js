const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
input.sort(); // 알파벳 오름차순 정렬

let left = 0;
let right = input.length;
let mid = (left + right) >> 1;

const palindrome = Array(right);
const alphabet = new Map();
for (const c of input) {
    if (alphabet.has(c)) alphabet.set(c, alphabet.get(c) + 1);
    else alphabet.set(c, 1);
}

let oddCount = 0;
for (const [key, value] of alphabet) {
    if (value % 2 === 1) oddCount++;
}

// 개수가 홀수인 알파벳이 2개 이상일 경우
if (oddCount > 1) {
    console.log("I'm Sorry Hansoo");
    process.exit();
}

for (let [key, value] of alphabet) {
    if (value % 2 === 1) {
        palindrome[mid] = key;
        value--;
    }
    for (let i = 0; i < value / 2; i++) {
        palindrome[left++] = key;
        palindrome[right--] = key;
    }
}

console.log(palindrome.join(''));

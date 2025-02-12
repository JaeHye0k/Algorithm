const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((e) => e.trim());

let T = +input[0];
let idx = 1;
let answer = '';

while (T--) {
    const W = input[idx++];
    const K = +input[idx++];

    let answerThree = Infinity;
    let answerFour = 0;

    const obj = {};

    for (let i = 0; i < W.length; i++) {
        const char = W[i];
        // 문자의 인덱스 저장
        if (!obj[char]) obj[char] = [i];
        else obj[char].push(i);
    }

    for (const char in obj) {
        // 어떤 문자를 K개 포함할경우 가장 짧은 연속 문자열 찾기
        if (obj[char].length >= K) {
            const arr = obj[char];
            let min = Infinity;
            let max = 0;

            for (let i = 0; i <= arr.length - K; i++) {
                const [left, right] = [arr[i], arr[i + K - 1]];
                min = Math.min(min, right - left + 1);
                max = Math.max(max, right - left + 1);
            }

            answerThree = Math.min(answerThree, min); // 최소 길이
            answerFour = Math.max(answerFour, max); // 최대 길이
        }
    }
    if (answerThree === Infinity || answerFour === 0) {
        answer += -1 + '\n';
    } else {
        answer += answerThree + ' ' + answerFour + '\n';
    }
}

console.log(answer.trimEnd());

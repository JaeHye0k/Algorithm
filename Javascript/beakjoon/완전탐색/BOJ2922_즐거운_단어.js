const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const cons = ['A', 'E', 'I', 'O', 'U'];
const vowel = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

let answer = 0;
const index = input.indexOf('_');
if (index === -1) answer = 1; // 빈칸이 존재하지 않는 경우
else recursion(input, index, '');
console.log(answer);

function recursion(s, idx, str) {
    // 빈칸을 모두 채웠으면 조건에 부합하는지 확인
    if (!s.includes('_')) {
        if (isPossible(s)) {
            let temp = 1;
            for (let c of str) {
                if (c === 'A') temp *= 5; // 모음
                else if (c === 'B') temp *= 20; // 자음
                else temp *= 1; // L
            }
            answer += temp;
        }
        return;
    }
    for (let i = idx; i < s.length; i++) {
        if (s[i] === '_') {
            // 빈칸에 모음을 넣는 경우
            s = s.slice(0, i) + 'A' + s.slice(i + 1);
            recursion(s, idx + 1, str + 'A');
            // 빈칸에 자음을 넣는 경우
            s = s.slice(0, i) + 'B' + s.slice(i + 1);
            recursion(s, idx + 1, str + 'B');
            // 빈칸에 L을 넣는 경우
            s = s.slice(0, i) + 'L' + s.slice(i + 1);
            recursion(s, idx + 1, str + 'L');
            return;
        }
    }
}

// '즐거운 단어' 조건에 부합하는지 확인
function isPossible(s) {
    if (!s.includes('L')) return false;
    for (let i = 0; i < s.length - 2; i++) {
        if (cons.includes(s[i]) && cons.includes(s[i + 1]) && cons.includes(s[i + 2])) return false;
        if (vowel.includes(s[i]) && vowel.includes(s[i + 1]) && vowel.includes(s[i + 2])) return false;
    }
    return true;
}

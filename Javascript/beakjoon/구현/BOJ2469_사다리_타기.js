const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const k = +input[0];
const n = +input[1];
const expected = input[2].trimEnd().split('');
const ladder = input.slice(3, 3 + n).map((e) => e.trimEnd().split(''));

// 가로 줄 두 개가 연속으로 붙는 경우는 없다.
// 1. 길이 k의 start, finish 배열 생성
// 2. 가려진 행이 i라고 했을때, start는 0 ~ i-1 까지 1씩 증가, finish는 n-1 ~ i+1 까지 1씩 감소
// 3. ladder[j] === '-'라면 swap([j],[j+1])

let hiddenIdx = 0;
for (let i = 0; i < n; i++) {
    if (ladder[i][0] === '?') {
        hiddenIdx = i;
        break;
    }
}

const start = Array.from(Array(k), (_, i) => String.fromCodePoint(65 + i));
const finish = expected.map((e) => e);

for (let i = 0; i < hiddenIdx; i++) {
    for (let j = 0; j < k; j++) {
        if (ladder[i][j] === '-') {
            [start[j], start[j + 1]] = [start[j + 1], start[j]];
        }
    }
}

for (let i = n - 1; i > hiddenIdx; i--) {
    for (let j = 0; j < k; j++) {
        if (ladder[i][j] === '-') {
            [finish[j], finish[j + 1]] = [finish[j + 1], finish[j]];
        }
    }
}

let answer = '';
for (let i = 0; i < k - 1; i++) {
    if (start[i] === finish[i]) {
        answer += '*';
    } else if (start[i] === finish[i + 1] && start[i + 1] === finish[i]) {
        answer += '-';
        [start[i], start[i + 1]] = [start[i + 1], start[i]];
    } else {
        answer = 'x'.repeat(k - 1);
        break;
    }
}

console.log(answer);

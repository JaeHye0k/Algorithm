const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

// 가로 줄 두 개가 연속으로 붙는 경우는 없다.
// . A 부터 탐색
// . i=세로, j=가로 일때, ladder[i][j-1]왼쪽으로 가는 방향, ladder[i][j]오른쪽으로 가는 방향 확인
// . '*' 이라면 i+1, '-'이라면 (j-1혹은 j+1) 그리고 i+1, '?'라면 기본적으로 i+1
// . 끝에 도달했을 때 ladder[i][j] 가 출발했을 때의 알파벳과 동일하다면 [j]번째 ?는 '*'
// . 다르다면 ?를 만난 지점까지 재귀를 탈출해서 그때의 [j]위치에 있는 ?를 '-'로 바꾼뒤 다시 탐색. [j-1]이 이미 '-'라면 못 바꿈
// . 끝에 도달했을 때 ladder[i][j] 가 출발했을 때의 알파벳과 동일하다면 [j]번째 ?는 '-'
// . 다르다면 ?를 만난 지점까지 재귀를 탈출해서 [j]를 '*'로 바꾸고 [j-1]위치에 있는 ?를 '-'로 바꾼뒤 다시 탐색. [j-2]이 이미 '-'라면 못 바꿈
// . └─ 하지만 -로 바꿀 시 이미 지나온 사다리에도 영향을 줄 수 있지 않나?
let answer = '';
const k = +input[0];
const n = +input[1];
const expected = input[2].trimEnd();
const ladder = input.slice(3, 3 + n).map((e) => e.trimEnd().split(''));

for (let i = 0; i < k; i++) {
    dfs(i, 0, i, 0, 0, 0);
}

function dfs(x1, y1, alphabet, x2, y2, d) {
    if (y1 === n) {
        if (expected[x1] === String.fromCodePoint(alphabet + 65) && d === 0) {
            answer += '*';
            return true;
        } else if (expected[x1] === String.fromCodePoint(alphabet + 65) && d === 1) {
            answer += '-';
            ladder[y2][x2] = '-';
            return true;
        }
    }

    if (ladder[y1][x1] === '?') {
        x2 = x1;
        y2 = y1;
        ladder[y2][x2] = '*';
    }

    if (ladder[y1][x1] === '*' && dfs(x1, y1 + 1, alphabet, x2, y2)) return true; // mid = 0
    else {
        d++;
    }
    if (ladder[y1][x1] === '-' && dfs(x1 + 1, y1 + 1, alphabet, x2, y2)) return true; // right = 1
    if (ladder[y1][x1 - 1] === '-' && dfs(x1 - 1, y1 + 1, alphabet, x2, y2)) return true; // left = 2
}

console.log(answer);

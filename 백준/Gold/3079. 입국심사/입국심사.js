// 모든 사람이 심사를 받는데 걸리는 최소 시간
// N = 입국 심사대 개수, M = 사람 수, T = 심사대별 걸리는 시간
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const T = input.slice(1).map(Number);

// 최소 시간 = 1 (Tk가 1초인 입국심사대가 있고, 사람이 한 명밖에 없을 경우)
// 최대 시간 = 가장 오래걸리는 시간 * 사람 수 (입국 심사대가 한 개밖에 없으면서 시간은 최대한 오래걸리고, 사람은 최대한 많을 때)

T.sort((a, b) => a - b);
let min = BigInt(1); // 최소 시간
let max = BigInt(T[T.length - 1] * M); // 최대 시간
let answer = max;

while (min <= max) {
    let cnt = BigInt(0);
    let mid = BigInt((max + min) / 2n); // 중간 시간
    T.forEach((time) => {
        // mid시간에 받을 수 있는 인원수
        cnt += mid / BigInt(time);
    });
    if (min === T[T.length - 1] * M) break;
    if (cnt >= M) {
        answer = answer < mid ? answer : mid;
        // mid시간에 받을 수 있는 인원수가 M보다 크다면 시간을 더 줄여도 됨
        max = mid - 1n;
    } else {
        // mid시간에 받을 수 있는 인원수가 M보다 적다면 시간을 더 늘려야 됨
        min = mid + 1n;
    }
}

console.log(String(answer));

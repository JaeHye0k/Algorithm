const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1].split(' ').map(Number);
let answer = 0;

function binarySearch(mid) {
    let count = 1; // 구간의 개수
    let max = -Infinity;
    let min = Infinity;
    for (let i = 0; i < N; i++) {
        max = Math.max(arr[i], max);
        min = Math.min(arr[i], min);
        // 5
        if (max - min > mid) {
            count++;
            max = arr[i];
            min = arr[i];
        }
    }
    return count;
}

let [min, max] = [0, Math.max(...arr)]; // 1

while (min <= max) {
    let mid = (min + max) >> 1; // 2
    let count = binarySearch(mid);
    // 3
    if (count <= M) {
        max = mid - 1;
        answer = mid; // 4
    } else min = mid + 1;
}

console.log(answer);

// 1. 최댓값중 최솟값의 가능한 범위 min ~ max
// 2. mid는 모든 구간의 점수중 최댓값이라고 가정함.
// 3. 구간의 개수가 M개 이하라면 그때의 mid가 정답 후보. 하지만 mid가 더 작아질 수 있으므로 계속해서 진행
// 4. max가 작아지면 mid도 작아짐. 또한 max는 작아지기만 하기 때문에 마지막 mid 값이 최댓값중 최솟값이 됨.
// 5. mid가 모든 구간의 점수중 최댓값이라고 가정했기 때문에 max-min > mid일 경우 구간을 분리해줌.

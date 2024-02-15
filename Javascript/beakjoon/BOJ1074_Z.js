const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const [N, r, c] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);
const arr = Array.from({ length: 2 ** N }, () => Array(2 ** N).fill(0));
let answer = 0;
const d = [
    [1, 0], // 1. 오른쪽 이동
    [0, 1], // 2. 아래 이동
    [1, 1], // 3. 오른쪽 아래 이동
];

let num = 0;
for (let i = 0; i < 2 ** N; i += 2) {
    for (let j = 0; j < 2 ** N; j += 2) {
        arr[i][j] = num++;
        arr[i][j + 1] = num++;
        arr[i + 1][j] = num++;
        arr[i + 1][j + 1] = num++;
    }
}
console.log(arr);
console.log(arr[r][c]);

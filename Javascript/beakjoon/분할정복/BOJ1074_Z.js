const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const [N, r, c] = require("fs").readFileSync(filePath).toString().trim().split(" ").map(Number);

let answer = 0;
function divide(row, col, size) {
    // 찾았을 경우
    if (row === r && col === c) {
        console.log(answer);
        return;
    }
    if (row <= r && r < row + size && col <= c && c < col + size) {
        size = Math.floor(size / 2);
        divide(row, col, size);
        divide(row, col + size, size);
        divide(row + size, col, size);
        divide(row + size, col + size, size);
    } else answer += size * size;
}
divide(0, 0, 2 ** N);

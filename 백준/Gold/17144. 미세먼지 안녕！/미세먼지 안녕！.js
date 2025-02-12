const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");

function solution(input) {
  let [R, C, T] = input[0].split(" ").map(Number);
  input = input.slice(1).map((e) => e.split(" ").map(Number));
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  // 공기청정기의 위치
  const airconditioner = [];
  for (let i = 0; i < R; i++) {
    if (input[i][0] === -1) airconditioner.push(i);
  }

  // 확산
  function spread() {
    let copiedInput = JSON.parse(JSON.stringify(input));
    for (let row = 0; row < R; row++) {
      for (let col = 0; col < C; col++) {
        if (input[row][col] > 0) {
          count = 0;
          for (let k = 0; k < 4; k++) {
            const [x, y] = move[k];
            const [nRow, nCol] = [x + row, y + col];
            if (nRow > -1 && nCol > -1 && nRow < R && nCol < C && input[nRow][nCol] !== -1) {
              count++;
              copiedInput[nRow][nCol] += Math.floor(input[row][col] / 5);
            }
          }
          copiedInput[row][col] -= Math.floor(input[row][col] / 5) * count;
        }
      }
    }
    return copiedInput;
  }
  // 반시계 방향 순환
  function rotateAntiClockWise() {
    const top = airconditioner[0];
    for (let row = top - 1; row > 0; row--) {
      input[row][0] = input[row - 1][0];
    }
    for (let col = 1; col < C; col++) {
      input[0][col - 1] = input[0][col];
    }
    for (let row = 0; row < top; row++) {
      input[row][C - 1] = input[row + 1][C - 1];
    }
    for (let col = C - 1; col > 1; col--) {
      input[top][col] = input[top][col - 1];
    }
    input[top][1] = 0;
  }
  // 시계 방향 순환
  function rotateClockWise() {
    const bottom = airconditioner[1];
    for (let row = bottom + 1; row < R - 1; row++) {
      input[row][0] = input[row + 1][0];
    }
    for (let col = 1; col < C; col++) {
      input[R - 1][col - 1] = input[R - 1][col];
    }
    for (let row = R - 1; row > bottom; row--) {
      input[row][C - 1] = input[row - 1][C - 1];
    }
    for (let col = C - 1; col > 1; col--) {
      input[bottom][col] = input[bottom][col - 1];
    }
    input[bottom][1] = 0;
  }
  function totalDust() {
    let total = 0;
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        if (input[i][j] !== -1) total += input[i][j];
      }
    }
    return total;
  }
  while (T--) {
    input = spread();
    rotateAntiClockWise();
    rotateClockWise();
  }
  return totalDust();
}
console.log(solution(input));

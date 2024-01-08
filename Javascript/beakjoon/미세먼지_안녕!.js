const fs = require("fs");
const input = fs.readFileSync("./ex.txt").toString().split("\n");

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
    let count;
    for (let row = 0; row < R; row++) {
      for (let col = 0; col < C; col++) {
        if (input[row][col] > 0) {
          count = 0;
          for (let k = 0; k < 4; k++) {
            const [x, y] = move[k];
            const [nRow, nCol] = [x + row, y + col];
            if (nRow > -1 && nCol > -1 && nRow < R && nCol < C && input[nRow][nCol] !== -1) {
              count++;
              input[nRow][nCol] += Math.floor(input[row][col] / 5);
            }
          }
          input[row][col] -= Math.floor(input[row][col] / 5) * count;
        }
      }
    }
  }
  // 반시계 방향 순환
  function rotateAntiClockWise() {
    const top = airconditioner[0];
    for (let i = 1; i < C - 1; i++) {
      input[top][i + 1] = input[top][i];
    }
    for (let i = top; i > 0; i--) {
      input[i - 1][C - 1] = input[i][C - 1];
    }
    for (let i = C - 1; i > 0; i--) {
      input[0][i - 1] = input[0][i];
    }
    for (let i = 1; i > top; i++) {
      input[i][0] = input[i - 1][0];
    }
    input[top][1] = 0;
  }
  // 시계 방향 순환
  function rotateClockWise() {
    const bottom = airconditioner[1];
    for (let i = 1; i < C - 1; i++) {
      input[bottom][i + 1] = input[bottom][i];
    }
    for (let i = bottom; i < R - 1; i++) {
      input[i + 1][C - 1] = input[i][C - 1];
    }
    for (let i = C - 1; i > 0; i--) {
      input[R - 1][i - 1] = input[R - 1][i];
    }
    for (let i = R - 1; i > bottom + 1; i--) {
      input[i - 1][0] = input[i][0];
    }
    input[bottom][1] = 0;
  }

  while (T--) {
    spread();
    rotateAntiClockWise();
    rotateClockWise();
  }

  let total = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (input[i][j] !== -1) total += input[i][j];
    }
  }
  return total;
}
console.log(solution(input));

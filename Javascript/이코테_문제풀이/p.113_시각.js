const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\n");

function solution(input) {
  const n = input[0].trim();
  let count = 0;
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j < 60; j++) {
      for (let k = 0; k < 60; k++) {
        if (`${i}${j}${k}`.includes("3")) count++;
      }
    }
  }
  return count;
}

console.log(solution(input));

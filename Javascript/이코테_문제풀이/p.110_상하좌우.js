const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().split("\n");

function solution(input) {
  const n = input[0].trim();
  const plans = input[1].split(" ");
  const directions = {
    L: [0, -1],
    R: [0, 1],
    U: [-1, 0],
    D: [1, 0],
  };
  let [x, y] = [1, 1];
  plans.forEach((plan) => {
    let temp_x = x;
    let temp_y = y;
    temp_x += directions[plan][0];
    temp_y += directions[plan][1];
    if (temp_x > 0 && temp_y > 0 && temp_x <= n && temp_y <= n) {
      x = temp_x;
      y = temp_y;
    }
  });
  return [x, y];
}

console.log(solution(input).join(" "));

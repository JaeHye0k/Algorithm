const { stdout } = require("process");
const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().trim().split("\n");
const n = Number(input[0]);
const n_arr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const m_arr = input[3].split(" ").map(Number);

n_arr.sort();

for (let i = 0; i < m; i++) {
    let start = 0;
    let end = n - 1;
    let mid;
    let target = m_arr[i];
    let result = false;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (n_arr[mid] === target) {
            result = true;
            break;
        } else if (n_arr[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    if (result) process.stdout.write("yes ");
    else process.stdout.write("no ");
}
console.log();

// 5
// 8 3 7 9 2
// 3
// 5 7 9

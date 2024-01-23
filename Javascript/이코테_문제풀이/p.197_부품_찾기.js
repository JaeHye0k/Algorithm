const { stdout } = require("process");
const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().trim().split("\n");
const n = Number(input[0]);
const n_arr = input[1].split(" ").map(Number);
const m = Number(input[2]);
const m_arr = input[3].split(" ").map(Number);
n_arr.sort();

function binary_search(array, target, start, end) {
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (array[mid] === target) return mid;
        else if (array[mid] > target) end = mid - 1;
        else start = mid + 1;
    }
    return;
}

for (let i = 0; i < m; i++) {
    let result = binary_search(n_arr, m_arr[i], 0, n - 1);
    if (result) process.stdout.write("yes ");
    else process.stdout.write("no ");
}
console.log();

// 5
// 8 3 7 9 2
// 3
// 5 7 9

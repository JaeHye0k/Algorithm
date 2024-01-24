const fs = require("fs");
const input = fs.readFileSync("./Javascript/ex.txt").toString().trim().split("\n");
const [n, m] = input[0].split(" ").map(Number);
const array = input[1].split(" ").map(Number);
const result = [];

function binary_search(array, m, start, end) {
    while (start <= end) {
        let sum = 0;
        let mid = Math.floor((start + end) / 2);
        for (let i = 0; i < n; i++) {
            sum += array[i] - mid;
        }
        if (sum >= m) {
            result.push(mid);
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
}
binary_search(array, m, 0, Math.max(...array));
console.log(Math.max(...result));

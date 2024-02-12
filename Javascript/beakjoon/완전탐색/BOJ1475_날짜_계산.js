const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim();
const [E, S, M] = input.split(" ").map(Number);

let year = 1;
let [e, s, m] = [1, 1, 1];
while (true) {
    if (e === E && s === S && m === M) break;
    year++;
    e = (e + 1) % 15;
    s = (s + 1) % 28;
    m = (m + 1) % 19;
}

console.log(year);

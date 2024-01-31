const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const n = +input[0];
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr[i] = i + 1;
    }
    while (arr.length > 1) {
        arr.shift();
        if (arr.length <= 1) break;
        let v = arr.shift();
        arr.push(v);
    }
    console.log(arr[0]);
    process.exit();
});

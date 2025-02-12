const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./LJH/input.txt";
let input = Number(fs.readFileSync(filePath).toString());
for (let i = 1; i <= input; i++) {
    if (i === 1) {
        for (let j = 0; j < input - i; j++) process.stdout.write(" ");
        process.stdout.write("*");
    } else if (i === input) {
        process.stdout.write("*".repeat(2 * input - 1));
    } else {
        for (let j = 0; j < input - i; j++) process.stdout.write(" ");
        process.stdout.write("*");
        for (let j = 1; j <= 2 * i - 3; j++) process.stdout.write(" ");
        process.stdout.write("*");
    }
    console.log();
}

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input = line.split(" ");
}).on("close", () => {
  str = input[0];
  n = Number(input[1]);
  for (var i = 0; i <= n; i++) {
    rl.output.write(str);
  }
});

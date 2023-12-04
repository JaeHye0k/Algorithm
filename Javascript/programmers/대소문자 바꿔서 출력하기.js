const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let changedInput = [];

rl.on("line", (line) => {
  input[0] = line;
}).on("close", () => {
  str = [...input[0]]; // Spread Operator(...) 로 문자열을 배열로 변환.
  str.forEach((e, i) => {
    e = e.charCodeAt(0);
    if (e >= 65 && e <= 90) {
      // 대문자일 경우
      str[i] = String.fromCharCode(e).toLowerCase();
    } else if (e >= 97 && e <= 122) {
      // 소문자일 경우
      str[i] = String.fromCharCode(e).toUpperCase();
    }
  });
  console.log(str.join(""));
});

// 1. 문자열 -> 배열(spread operator, .split('')), 배열 -> 문자열(.join(''))
// 2. String -> Number(UTF-16) ("string".charCodeAt(index)), Number(UTF-16) -> String (String.fromCharCode(Number))

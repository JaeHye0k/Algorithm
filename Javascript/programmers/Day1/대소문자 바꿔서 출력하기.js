const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let changedInput = [];

rl.on("line", (line) => {
  input = [line];
}).on("close", () => {
  str = input[0].split(""); // 문자열 -> 배열
  str.forEach((e, i) => {
    // 대문자일 경우
    if (e === e.toUpperCase()) {
      str[i] = e.toLowerCase();
      // 소문자일 경우
    } else {
      str[i] = e.toUpperCase();
    }
  });
  console.log(str.join("")); // 배열 -> 문자열
});

// 1. 문자열 -> 배열(spread operator, .split('')), 배열 -> 문자열(.join(''))
// 2. String -> Number(UTF-16) ("string".charCodeAt(index)), Number(UTF-16) -> String (String.fromCharCode(Number))

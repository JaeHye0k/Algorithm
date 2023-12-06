const readline = require("readline"); // readline 모듈 불러오기
const rl = readline // 입출력 스트림을 제어하는 객체 생성
  .createInterface({
    input: process.stdin,
    output: process.stdout,
  })
  .on("line", console.log); // 'line' 이벤트 발생시 console.log 함수 호출하는 이벤트 핸들러 추가

/*const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
  input.push(line);
}).on("close", () => {
  str = input.slice(-1).toString();
  console.log(str);
});*/

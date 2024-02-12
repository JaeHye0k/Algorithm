const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = fs.readFileSync(filePath).toString().trim().split("\n");
const ch = Number(input[0]);
const brokenButtonNum = Number(input[1]);
const brokenButtons = input[2].split(" ").map(Number);

let answer = 0; // 버튼을 누른 횟수
let curCh = 100;
let buttons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
buttons = buttons.filter((e) => !brokenButtons.includes(e)); // 고장 나지 않은 버튼

if (curCh === ch) return answer;
ch.split("").forEach((e) => {});

// 1. 현재 채널과 원하는 채널을 비교. => if(curCh === ch) return answer;
// 2. 채널이 다르다면 원하는 채널의 첫 번째 자리부터 확인해서 고장 나지 않은 버튼으로 갈 수 있는지 확인
// 각 자릿수에 해당하는 버튼이 고장나지 않았다면 해당 버튼을 누르고, 만약 고장났다면 가장 근접한 버튼 누르기 (절댓값의 차이가 적은 버튼)

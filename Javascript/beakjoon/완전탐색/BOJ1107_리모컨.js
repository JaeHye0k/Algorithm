const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
let [n, m, brokens] = fs.readFileSync(filePath).toString().trim().split("\n");
brokens = brokens ? brokens.split(" ") : []; // 고장난 버튼이 없을 경우도 고려

// 버튼을 누른 횟수 (처음엔 +,- 버튼만 눌러서 목표 채널에 도달 가능한 횟수로 초기화)
let btnCount = Math.abs(100 - n);

// 0~999,999 까지 모든 버튼을 눌러본다
for (let i = 0; i < 1_000_000; i++) {
    const numString = i.toString();
    let isValid = true;
    // 현재 누른 버튼중에 고장난 버튼이 포함되어 있다면 스킵한다.
    for (let j = 0; j < numString.length; j++) {
        if (brokens.includes(numString[j])) {
            isValid = false;
            break;
        }
    }
    // 현재 누른 버튼들이 모두 고장나지 않았을 경우 횟수가 더 작은 값으로 갱신
    if (isValid) {
        btnCount = Math.min(btnCount, Math.abs(n - i) + numString.length);
    }
    // Math.abs(n - i) = 목표 채널과 현재 채널의 채널 수 차이 = 현재 채널(i)에서 '+' 혹은 '-' 버튼만 눌러서 목표 채널(n)로 가기 위한 횟수
    // numString.length = 현재 채널로 오기위해 누른 숫자 버튼 개수
}
console.log(btnCount);

// 1. +,- 버튼만 사용해서 목표 채널에 도착했을 때의 횟수
// 2. 숫자 버튼과 +,- 버튼 둘 다 사용해서 목표 채널에 도착했을 때의 횟수
// 1,2 번을 비교하여 더 적은 횟수를 선택.

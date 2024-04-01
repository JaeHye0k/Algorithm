const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let gear = input.slice(0, 4).map((e) => e.split('').map(Number));
const gearCopy = JSON.parse(JSON.stringify(gear));
const k = +input[4];
const actions = input.slice(5).map((e) => e.split(' ').map(Number));
let answer = 0;

// 1. 모든 바퀴가 동시에 굴러야 함
// 2. 방향은 번갈아 가며 구름
// 3. 극이 같을 경우 반복문 중지

actions.forEach(([num, wise]) => {
    num -= 1;
    // 시계 방향인 경우
    if (wise === 1) {
        let copyWise = wise;
        for (let i = num; i < 4; i++) {
            copyWise *= -1;
            // 오른쪽 톱니바퀴가 존재하고, 극이 다를 경우
            if (gear[i + 1] && gear[i][2] !== gear[i + 1][6]) {
                if (copyWise === -1) reverseClockWise(gearCopy[i + 1]);
                else clockWise(gearCopy[i + 1]);
            } else break;
        }
        copyWise = wise;
        for (let i = num; i >= 0; i--) {
            copyWise *= -1;
            // 왼쪽 톱니바퀴가 존재하고, 극이 다를 경우
            if (gear[i - 1] && gear[i][6] !== gear[i - 1][2]) {
                if (copyWise === -1) reverseClockWise(gearCopy[i - 1]);
                else clockWise(gearCopy[i - 1]);
            } else break;
        }
        clockWise(gearCopy[num]);
    }
    // 반시계 방향일 경우
    else if (wise === -1) {
        let copyWise = wise;
        for (let i = num; i < 4; i++) {
            copyWise *= -1;
            // 오른쪽 톱니바퀴가 존재하고, 극이 다를 경우
            if (gear[i + 1] && gear[i][2] !== gear[i + 1][6]) {
                if (copyWise === 1) clockWise(gearCopy[i + 1]);
                else reverseClockWise(gearCopy[i + 1]);
            } else break;
        }
        copyWise = wise;
        for (let i = num; i >= 0; i--) {
            copyWise *= -1;
            // 왼쪽 톱니바퀴가 존재하고, 극이 다를 경우
            if (gear[i - 1] && gear[i][6] !== gear[i - 1][2]) {
                if (copyWise === 1) clockWise(gearCopy[i - 1]);
                else reverseClockWise(gearCopy[i - 1]);
            } else break;
        }
        reverseClockWise(gearCopy[num]);
    }
    gear = JSON.parse(JSON.stringify(gearCopy));
});

for (let i = 0; i < 4; i++) {
    if (gear[i][0] === 0) {
        answer += 0;
    } else {
        answer += i === 0 ? 1 : 1 << i;
    }
}

console.log(answer);

function clockWise(arr) {
    const rear = arr.pop();
    arr.unshift(rear);
}

function reverseClockWise(arr) {
    const front = arr.shift();
    arr.push(front);
}

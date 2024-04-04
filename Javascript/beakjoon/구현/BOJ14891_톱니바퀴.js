const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let gear = input.slice(0, 4).map((e) => e.trimEnd().split('').map(Number));
const k = +input[4];
const actions = input.slice(5).map((e) => e.split(' ').map(Number));
let answer = 0;

actions.forEach(([num, direction]) => {
    num -= 1;
    left(num - 1, -direction);
    right(num + 1, -direction);
    rotate(gear[num], direction);
});

// 점수 계산
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

function antiClockWise(arr) {
    const front = arr.shift();
    arr.push(front);
}
function rotate(arr, direction) {
    // 시계 방향
    if (direction === 1) {
        clockWise(arr);
    }
    // 반시계 방향
    else {
        antiClockWise(arr);
    }
}

function left(num, direction) {
    if (num < 0) return;
    // 극이 다른 경우
    if (gear[num][2] !== gear[num + 1][6]) {
        left(num - 1, -direction); // 왼쪽 톱니바퀴 탐색
        rotate(gear[num], direction); // 현재 톱니바퀴 회전
    }
}

function right(num, direction) {
    if (num > 3) return;
    // 극이 다른 경우
    if (gear[num][6] !== gear[num - 1][2]) {
        right(num + 1, -direction); // 오른쪽 톱니바퀴 탐색
        rotate(gear[num], direction); // 현재 톱니바퀴 회전
    }
}

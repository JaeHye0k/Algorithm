const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input[0];
const gear = input.slice(1, 1 + T).map((e) => e.trimEnd().split('').map(Number));
const K = +input[1 + T];
const rotation = input.slice(2 + T).map((e) => e.split(' ').map(Number));

function rotate(arr, wise) {
    if (wise === 1) {
        let temp = arr.pop();
        arr.unshift(temp);
    } else {
        let temp = arr.shift();
        arr.push(temp);
    }
}

function left(num, wise) {
    if (num === 0) {
        rotate(gear[num], wise);
        return;
    }
    if (gear[num][6] !== gear[num - 1][2]) left(num - 1, wise * -1);
    rotate(gear[num], wise);
}

function right(num, wise) {
    if (num === T - 1) {
        rotate(gear[num], wise);
        return;
    }
    if (gear[num][2] !== gear[num + 1][6]) right(num + 1, wise * -1);
    rotate(gear[num], wise);
}

for (let [num, wise] of rotation) {
    num--;
    if (num > 0 && gear[num][6] !== gear[num - 1][2]) left(num - 1, wise * -1);
    if (num < T - 1 && gear[num][2] !== gear[num + 1][6]) right(num + 1, wise * -1);
    rotate(gear[num], wise);
}

let answer = 0;
for (let i = 0; i < T; i++) {
    if (gear[i][0] === 1) answer++;
}
console.log(answer);

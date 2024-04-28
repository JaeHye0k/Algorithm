const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const durability = input[1].split(' ').map(Number);
const robots = Array(N).fill(false);
let zero = 0;
let answer = 0;

function rotate() {
    // 내구도 한 칸씩 이동
    let temp = durability.pop();
    durability.unshift(temp);
    // 로봇 한 칸씩 이동
    for (let i = N - 2; i >= 0; i--) {
        if (robots[i]) {
            moveFoward(i);
        }
    }

    // 첫 번째 로봇부터 이동할 수 있으면 이동
    for (let i = N - 1; i >= 0; i--) {
        // i번째 칸에 로봇이 있다면 (N-1번째 칸은 false임이 보장됨)
        if (robots[i]) {
            // 앞에 로봇이 없고, 내구도가 1 이상이라면
            if (!robots[i + 1] && durability[i + 1] >= 1) {
                moveFoward(i);
                durability[i + 1]--;
                if (durability[i + 1] === 0) zero++;
            }
        }
    }

    // 올리는 위치에 로봇을 올릴 수 있다면 올리기
    if (durability[0] > 0) {
        robots[0] = true;
        durability[0]--;
        if (durability[0] === 0) zero++;
    }
}

function moveFoward(index) {
    // 로봇이 이동했을 때 내리는 위치라면
    if (index + 1 === N - 1) {
        robots[index + 1] = robots[index] = false;
    } else {
        robots[index + 1] = true;
        robots[index] = false;
    }
}

while (zero < K) {
    rotate();
    answer++;
}

console.log(answer);

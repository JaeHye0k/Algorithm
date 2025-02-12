const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
let [y, x, d] = input[1].split(' ').map(Number);
const room = input.slice(2).map((e) => e.split(' ').map(Number));
const dx = [0, 1, 0, -1];
const dy = [-1, 0, 1, 0];
let allClean = true;
let answer = 1;
room[y][x] = 2;
cleanRoom(y, x);
console.log(answer);

function cleanRoom(y, x) {
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (room[ny][nx] === 0) {
            allClean = false;
            break;
        }
    }

    if (allClean) {
        const nx = x - dx[d];
        const ny = y - dy[d];
        if (room[ny][nx] === 1) return answer;
        else {
            x = nx;
            y = ny;
        }
    } else {
        d = (d + 3) % 4;
        const nx = x + dx[d];
        const ny = y + dy[d];
        if (room[ny][nx] === 0) {
            x = nx;
            y = ny;
            allClean = true;
            room[y][x] = 2; // 청소한 칸 = 2
            answer++;
        }
    }
    return (answer = cleanRoom(y, x));
}

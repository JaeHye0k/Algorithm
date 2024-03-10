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
    // 상,하,좌,우에 청소를 안한 곳이 있는가
    for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (room[ny][nx] === 0) {
            allClean = false;
            break;
        }
    }
    // 청소를 안 한 곳이 없다면
    if (allClean) {
        // 후진
        const nx = x - dx[d];
        const ny = y - dy[d];
        // 뒤쪽이 벽으로 막혀있다면 종료
        if (room[ny][nx] === 1) return answer;
        else {
            x = nx;
            y = ny;
        }
    }
    // 청소를 안 한 곳이 있다면
    else {
        // 반시계 방향으로 90도 회전
        d = (d + 3) % 4;
        // 전진
        const nx = x + dx[d];
        const ny = y + dy[d];
        // 회전한 곳이 청소를 안한 곳이라면
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

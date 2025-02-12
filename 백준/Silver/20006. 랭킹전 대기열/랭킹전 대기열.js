const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [p, m] = input[0].split(' ').map(Number);
let player = input.slice(1).map((e) => e.split(' '));
player = player.map(([lv, name]) => [+lv, name]);
const room = [[player[0]]];
for (let i = 1; i < p; i++) {
    const [lv, name] = player[i];
    let entered = false;
    for (let j = 0; j < room.length; j++) {
        // player[i]가 방에 입장 가능하다면
        if (player[i][0] >= room[j][0][0] - 10 && player[i][0] <= room[j][0][0] + 10 && room[j].length < m) {
            room[j].push(player[i]);
            entered = true;
            break;
        }
    }
    if (!entered) room.push([player[i]]);
}

let answer = '';
for (let i = 0; i < room.length; i++) {
    if (room[i].length === m) {
        answer += 'Started!\n';
    } else {
        answer += 'Waiting!\n';
    }
    // 닉네임 순으로 정렬
    room[i].sort((a, b) => {
        if (a[1] < b[1]) {
            return -1;
        }
    });
    room[i].forEach((player) => (answer += player.join(' ') + '\n'));
}
console.log(answer.trimEnd());

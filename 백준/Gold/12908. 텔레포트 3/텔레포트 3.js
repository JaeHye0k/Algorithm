const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = [];
arr.push(input.shift().split(' ').map(Number));
arr.push(input.shift().split(' ').map(Number));
for (let i = 0; i < 3; i++) {
    const row = input[i].split(' ').map(Number);
    arr.push(row.splice(0, 2));
    arr.push(row.splice(0, 2));
}

const dist = Array.from({ length: 8 }, () => Array(8).fill(Infinity));

// 거리 테이블 초기화
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        if (i === j) {
            dist[i][j] = 0;
            continue;
        }
        dist[i][j] = Math.abs(arr[i][0] - arr[j][0]) + Math.abs(arr[i][1] - arr[j][1]);
        dist[j][i] = Math.abs(arr[i][0] - arr[j][0]) + Math.abs(arr[i][1] - arr[j][1]);
    }
}

// 텔레포트로 갈 수 있는 좌표는 거리를 10으로 설정
for (let i = 1; i <= 3; i++) {
    dist[i * 2][i * 2 + 1] = 10;
    dist[i * 2 + 1][i * 2] = 10;
}

// 플로이드 워셜
for (let k = 0; k < 8; k++) {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            if (dist[i][j] > dist[i][k] + dist[k][j]) {
                dist[i][j] = dist[i][k] + dist[k][j];
            }
        }
    }
}

console.log(dist[0][1]);

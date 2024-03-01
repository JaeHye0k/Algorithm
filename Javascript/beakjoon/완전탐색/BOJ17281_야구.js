const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const arr = input.slice(1).map((e) => e.split(' ').map(Number));
const visited = Array(9).fill(false);
let answer = 0;
permutation([]);
console.log(answer);

// 모든 조합 확인 O(n!)
function permutation(players) {
    if (players.length === 9) play([...players]); // 타순이 정해진 경우
    else if (players.length === 3) permutation([...players, 0]); // 1번 선수는 4번 타자로 항상 고정
    else {
        // 1번 선수 제외하고 순회
        for (let i = 1; i <= 8; i++) {
            if (!visited[i]) {
                visited[i] = true;
                permutation([...players, i]);
                visited[i] = false;
            }
        }
    }
}

// 해당 타순으로 몇 득점을 낼 수 있는지 확인
function play(battingOrderList) {
    let score = 0;
    let order = 0;

    for (let i = 0; i < N; i++) {
        const inning = arr[i];
        let out = 0;
        let base1 = 0;
        let base2 = 0;
        let base3 = 0;

        while (out < 3) {
            const result = inning[battingOrderList[order++ % 9]];

            if (result === 0) out++;
            else if (result === 1) {
                score += base3;
                base3 = base2;
                base2 = base1;
                base1 = 1;
            } else if (result === 2) {
                score += base3 + base2;
                base3 = base1;
                base2 = 1;
                base1 = 0;
            } else if (result === 3) {
                score += base3 + base2 + base1;
                base3 = 1;
                base2 = base1 = 0;
            } else if (result === 4) {
                score += base3 + base2 + base1 + 1;
                base3 = base2 = base1 = 0;
            }
        }
    }
    answer = Math.max(answer, score);
}

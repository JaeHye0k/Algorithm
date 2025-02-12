const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let N;
rl.on('line', (line) => {
    N = +line;
    rl.close();
}).on('close', () => {
    solution(N);
    process.exit();
});

function solution(N) {
    let count = 0;
    let path = '';
    let answer = '';

    if (N > 20) {
        console.log((2n ** BigInt(N) - 1n).toString());
        return;
    } else {
        hanoi(N, '1', '3', '2');
        answer += count + '\n' + path;
        console.log(answer.trimEnd());
        return;
    }

    function hanoi(N, from, to, via) {
        if (N === 0) return;

        hanoi(N - 1, from, via, to);
        move(from, to);
        hanoi(N - 1, via, to, from);
    }

    function move(from, to) {
        count++;
        path += `${from} ${to}\n`;
    }
}

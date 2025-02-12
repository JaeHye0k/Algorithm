const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

let T = +input[0];
const totalAnswer = [];
let inputIdx = 1;

while (T--) {
    const p = input[inputIdx++];
    const n = +input[inputIdx++];
    const arr = JSON.parse(input[inputIdx++]);

    let front = 0;
    let rear = arr.length - 1;
    let error = false;
    let reversed = false;

    for (let i = 0; i < p.length; i++) {
        if (p[i] === 'R') reversed = !reversed;
        else {
            if (front > rear) {
                error = true;
                break;
            }
            if (reversed) rear--;
            else front++;
        }
    }
    if (error) {
        totalAnswer.push('error');
    } else {
        let answer = arr.slice(front, rear + 1);
        answer = reversed ? answer.reverse() : answer;
        totalAnswer.push(JSON.stringify(answer));
    }
}
console.log(totalAnswer.join('\n'));

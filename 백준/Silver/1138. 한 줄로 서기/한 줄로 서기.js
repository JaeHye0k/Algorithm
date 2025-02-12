const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const people = input[1].split(' ').map((e, i) => [Number(e), i + 1]);

for (let i = 0; i < N; i++) {
    let idx = people.findIndex((e) => e[1] === i + 1);
    let count = people[idx][0];
    for (let j = 0; j < N; j++) {
        if (count === 0) break;
        if (people[idx][1] < people[j][1]) {
            count--;
            [people[idx], people[j]] = [people[j], people[idx]];
            idx = j;
        }
    }
}

let answer = people.map((e) => e[1]);
console.log(...answer);

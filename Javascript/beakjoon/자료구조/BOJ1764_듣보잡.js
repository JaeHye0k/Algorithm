const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const hashMap = new Map();
input.slice(1).map((name) => {
    if (hashMap.has(name)) hashMap.set(name, hashMap.get(name) + 1);
    else hashMap.set(name, 1);
});
const names = [];
let answer = 0;
for (let [name, count] of hashMap) {
    if (count === 2) {
        names.push(name);
        answer++;
    }
}

names.sort();
console.log(answer);
console.log(names.join('\n'));

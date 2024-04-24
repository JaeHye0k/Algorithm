const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const [N, K] = require('fs').readFileSync(filePath).toString().trim().split(' ').map(Number);
const remains = [];
let bottles = N;
let litter = 1;
let answer = 0;

while (bottles >= 1) {
    if (bottles % 2 === 0) {
        bottles /= 2;
        litter *= 2;
    } else {
        remains.push(litter);
        bottles -= 1;
    }
}

if (bottles + remains.length <= K) {
    console.log(answer);
    process.exit();
}

for (let i = 0; i < remains.length - 1; i++) {
    if (bottles + remains.length <= K)
        if (remains[i] !== remains[i + 1]) {
            recursion(i);
        }
    remains[i + 1] += remains[i];
    bottles++;
    if (remains.length - bottles <= K) break;
}

// remains[index] 와 remains[index+1] 을 같은 값으로 만든다.
function recursion(index) {
    answer += remains[index];
    remains[index] *= 2;
    if (remains[index] === remains[index + 1]) return;
    recursion(index);
}

console.log(answer);

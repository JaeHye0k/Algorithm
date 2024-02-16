const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [T, n, m] = [+input[0], +input[1], +input[3]];
const A = input[2].split(' ').map(Number);
const B = input[4].split(' ').map(Number);
let answer = 0;

const A_map = {};
// A 배열로 만들수 있는 부 배열의 각각의 합을 객체의 key에 저장한다.
for (let i = 0; i < n; i++) {
    let sum = 0;
    for (let j = i; j < n; j++) {
        sum += A[j];
        if (A_map[sum]) A_map[sum]++;
        else A_map[sum] = 1;
    }
}
// B 배열로 만들수 있는 부 배열의 각각의 합과,
// A 배열로 만들어진 객체의 key 값을 더해 T값이 나올수 있는 경우를 찾는다.
for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = i; j < m; j++) {
        sum += B[j];
        if (A_map[T - sum]) {
            answer += A_map[T - sum];
        }
    }
}

console.log(answer);

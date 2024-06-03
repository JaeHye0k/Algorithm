// 스왑했을 때 동일한 문자 사이에 끼는 것이 최선
// 그게 안된다면 왼쪽이나 오른쪽중 하나만 동일한 곳에 끼는 것이 최선

// 문자열의 길이만큼의 길이를 가진 A라는 배열을 만들고 a가 있는 인덱스에 1을 삽입.
// 문자열의 길이만큼의 길이를 가진 B라는 배열을 만들고 b가 있는 인덱스에 1을 삽입.
// i가 0부터 n-1까지 반복한다.
// j가 i+1부터 n-1까지 반복한다.
// i번째 알파벳과 j번째 알파벳이 다른가?
// (네) i와 j를 스왑했을 때 최선의 위치라면 j인덱스 저장
// (아니오) continue
// i와 최선의 위치 j와 스왑
// 카운트 증가

const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
const N = input.length;
const A = Array(N).fill(0);
const B = Array(N).fill(0);
let countA = 0;
let countB = 0;

for (let i = 0; i < N; i++) {
    //     let left = i - 1;
    //     let right = i + 1;
    //     if (left < 0) left = N - 1;
    //     if (right === N) right = 0;
    //     if (input[left] === 'a' && input[i] === 'a' && input[right] === 'a') A[i] = 3;
    //     else if (input[left] === 'b' && input[i] === 'b' && input[right] === 'b') B[i] = 3;
    //     else if (input[i] === 'a' && (input[left] === 'a' || input[right] === 'a')) A[i] = 2;
    //     else if (input[i] === 'b' && (input[left] === 'b' || input[right] === 'b')) B[i] = 2;
    if (input[i] === 'a') A[i] = 1;
    else B[i] = 1;
}

let [leftA, rightA] = [0, 0];
let [leftB, rightB] = [0, 0];

for (let i = 0; i < N; i++) {
    if (input[i] !== 'a') continue;
    [leftA, rightA] = [i - 1, i + 1];
    if (leftA < 0) leftA = N - 1;
    if (rightA === N) rightA = 0;
    countA = A[leftA] + A[rightA];
    for (let j = 0; j < N; j++) {
        if (input[j] === 'b') {
            [leftB, rightB] = [j - 1, j + 1];
            if (leftB < 0) leftB = N - 1;
            if (rightB === N) rightB = 0;
            countB = B[leftB] + B[rightB];

            [A[i], A[j]] = [A[j], A[i]];
            [B[i], B[j]] = [B[j], B[i]];
            if (countA < A[leftB] + A[rightB] && countB < B[leftA] + B[rightA]) {
                [input[i], input[j]] = [input[j], input[i]];
                countA = A[leftB] + A[rightB];
                countB = B[leftA] + B[rightA];
            } else {
                [A[i], A[j]] = [A[j], A[i]];
                [B[i], B[j]] = [B[j], B[i]];
            }
        }
    }
}

console.log(input);

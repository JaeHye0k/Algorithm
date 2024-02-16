const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, M, K] = input.splice(0, 1)[0].split(" ").map(Number);
const keyValue = input.splice(0, N).map((e) => e.split(" ").map(Number));
const command = input.splice(0, M).map((e) => e.split(" ").map(Number));
const db = {};
keyValue.forEach(([key, value]) => {
    db[key] = value;
});
const keys = Object.keys(db)
    .map(Number)
    .sort((a, b) => a - b);

function findKey(key) {
    // 정확히 일치하는 key가 있을 경우
    if (db[key]) return key;
    const idx = keys.findIndex((v) => v > key); // key보다 큰 첫 번째 값의 인덱스
    const leftGap = key - keys[idx - 1];
    const rightGap = keys[idx] - key;
    // left가 없는 경우
    if (idx === 0 && rightGap <= K) return keys[idx];
    // right가 없는 경우
    if (idx === -1 && key - keys[keys.length - 1] <= K) return keys[keys.length - 1];
    // right 값이 key 값에 더 인접해있을 경우
    if (rightGap < leftGap && rightGap <= K) return keys[idx];
    // left 값이 key에 더 인접해있을 경우
    if (rightGap > leftGap && leftGap <= K) return keys[idx - 1];
    // right 값과 left 값이 key 값에 동일하게 인접해있을 경우
    if (rightGap === leftGap) return "?";
    // key값과 인접한 값이 없을 경우
    return -1;
}

const answer = [];
command.forEach(([n, key, value]) => {
    if (n === 1) {
        db[key] = value;
        keys.push(key);
        keys.sort((a, b) => a - b);
    } else if (n === 2) {
        const adjKey = findKey(key);
        if (adjKey !== "?" && adjKey !== -1) db[adjKey] = value;
    } else {
        const adjKey = findKey(key);
        if (adjKey !== "?" && adjKey !== -1) {
            answer.push(db[adjKey]);
        } else {
            answer.push(adjKey);
        }
    }
});

console.log(answer.join("\n"));

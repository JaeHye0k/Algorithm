const filePath = process.platform === "linux" ? "/dev/stdin" : "./Javascript/input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const [N, M, K] = input.splice(0, 1)[0].split(" ").map(Number);
const keyValue = input.splice(0, N).map((e) => e.split(" ").map(Number));
const command = input.splice(0, M).map((e) => e.split(" ").map(Number));
const db = {};
keyValue.forEach(([key, value]) => {
    db[key] = value;
});

const answer = [];
command.forEach(([n, key, value]) => {
    switch (n) {
        case 1:
            db[key] = value;
            break;
        case 2:
            // 정확히 일치하는 key가 있을 경우
            if (db[key]) db[key] = value;
            else {
                // key가 없을 경우
                // k의 범위를 고려해서 key 찾기 (만약 2개 이상이라면 무시)
                const temp = [];
                for (let i = 1; i <= K; i++) {
                    if (temp.length >= 1) break; // key가 여러개일 경우 반복문 탈출
                    if (db[key + i]) temp.push(key + i);
                    if (db[key - i]) temp.push(key - i);
                }
                if (temp.length === 1) {
                    const key = temp.pop();
                    db[key] = value;
                }
            }
            break;
        case 3:
            if (db[key]) answer.push(db[key]);
            else {
                // 정확히 일치하는 key가 없을 경우
                const temp = [];
                for (let i = 1; i <= K; i++) {
                    if (temp.length >= 1) break;
                    if (db[key + i]) temp.push(key + i);
                    if (db[key - i]) temp.push(key - i);
                }
                if (temp.length === 0) answer.push("-1\n");
                else if (temp.length === 1) answer.push(db[temp.pop()] + "\n");
                else answer.push("?\n");
            }
            break;
    }
});

console.log(answer.join(""));

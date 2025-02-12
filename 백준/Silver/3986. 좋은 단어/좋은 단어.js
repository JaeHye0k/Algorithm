function solution(n, str) {
    let result = 0;
    for (let i = 0; i < n; i++) {
        let arr = [...str[i]]; // 문자열을 배열로 변환
        let stack = [arr.shift()];
        let top = 0;
        for (let s of arr) {
            if (stack[top] !== s) {
                stack.push(s);
                top++;
            } else {
                stack.pop();
                top--;
            }
        }
        if (stack.length === 0) result++;
    }
    return result;
}

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let input = [];

rl.on("line", (line) => {
    input.push(line);
}).on("close", () => {
    const [n, ...str] = input;
    console.log(solution(Number(n), str));
    process.exit();
});

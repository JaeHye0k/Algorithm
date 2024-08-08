const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
// const input = require('fs').readFileSync(filePath).toString().trim().split('\n').map(Number);
const input = Array.from({ length: 5 }, (e, i) => i + 1);
// console.log(input);
const stack = [input[0]];
let result = '';

for (let i = 1; i < input.length; i++) {
    const node = input[i];
    let top = stack[stack.length - 1];
    let topOfTop = stack[stack.length - 2];

    if (node < top) stack.push(node);
    else {
        if (topOfTop === undefined) stack.push(node);
        else if (topOfTop > node) stack.push(node);
        else {
            while (node > topOfTop && topOfTop !== undefined) {
                result += stack.pop() + '\n';
                topOfTop = stack[stack.length - 2];
            }
            stack.push(node);
        }
    }
}

popStackSpare();
console.log(result.trimEnd());

function popStackSpare() {
    while (stack.length) {
        const node = stack.pop();
        result += node + '\n';
    }
}

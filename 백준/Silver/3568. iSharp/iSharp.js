const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');
const common = input[0];
const vars = input.slice(1).map((e) => e.slice(0, -1));
let answer = '';
const regex = new RegExp('[a-zA-Z]+');
for (let v of vars) {
    let type = '';
    let varName = v.match(regex)[0];
    v = v.replace(regex, '');
    for (let i = v.length - 1; i >= 0; i--) {
        if (v[i] === ']' && v[i - 1] === '[') {
            type += '[]';
            i--;
        } else type += v[i];
    }
    answer += `${common}${type} ${varName};\n`;
}

console.log(answer.trimEnd());

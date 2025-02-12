const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const command = input.slice(1).map((e) => e.split(' '));
const opcodeList = ['ADD', 'SUB', 'MOV', 'AND', 'OR', 'NOT', 'MULT', 'LSFTL', 'LSFTR', 'ASFTR', 'RL', 'RR'];
const obj = {};
opcodeList.forEach((key, i) => {
    obj[key] = i.toString(2).padStart(4, 0);
});
// opcode의 마지막 문자가 C로 끝날경우 4번 비트는 1, 아닐경우 0
// 5번 비트는 0
// 6~8 번 비트는 rD.toString(2).padStart(3,'0')
// 9~11번 비트는 opcode가 MOV로 시작하거나 NOT일 경우 000, 아닐 경우 rA.toString(2).padStart(3,'0')
// 12~15번 비트는 opcode가 C로 끝날경우 rB.toString(2).padStart(4,'0');
// C로 끝나지 않을 경우 12~14번 비트는 rB.toString(2).padStart(3,'0');
// 15번 비트는 0
let answer = '';
for (let [opcode, rD, rA, rB] of command) {
    rD = +rD;
    rA = +rA;
    rB = +rB;
    if (opcode.endsWith('C')) answer += obj[opcode.slice(0, -1)];
    else answer += obj[opcode];
    if (opcode.endsWith('C')) answer += '1';
    else answer += '0';
    answer += '0';
    answer += rD.toString(2).padStart(3, '0');
    if (opcode.startsWith('MOV') || opcode === 'NOT') answer += '000';
    else answer += rA.toString(2).padStart(3, '0');
    if (opcode.endsWith('C')) answer += rB.toString(2).padStart(4, '0');
    else answer += rB.toString(2).padStart(3, '0') + '0';
    answer += '\n';
}

console.log(answer.trimEnd());

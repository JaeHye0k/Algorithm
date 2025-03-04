const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const N = +input[0];
const string = input.slice(1);
let t = '';
let front = 0;
let rear = N - 1;
for (let i = 0; i < N; i++) {
    if (i % 80 === 0) t += '\n';
    if (string[front] < string[rear]) t += string[front++];
    else if (string[front] > string[rear]) t += string[rear--];
    else {
        let innerFront = front + 1;
        let innerRear = rear - 1;
        let isChanged = false;
        while (innerFront <= innerRear) {
            if (string[innerFront] < string[innerRear]) {
                t += string[front++];
                isChanged = true;
                break;
            } else if (string[innerFront] > string[innerRear]) {
                t += string[rear--];
                isChanged = true;
                break;
            } else {
                innerFront++;
                innerRear--;
            }
        }
        if (!isChanged) t += string[front++];
    }
}
console.log(t.trimStart());

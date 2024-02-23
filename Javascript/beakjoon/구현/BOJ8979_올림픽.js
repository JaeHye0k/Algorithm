const filePath = process.parrlatform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr = input.map((row) => row.split(' ').map(Number));
const [N, K] = arr.shift();
const rank = Array(N + 1).fill(0);
let add = 1;
rank[arr[0][0]] = 1;
for (let i = 1; i < N; i++) {
    let [nation, g, s, b] = arr[i];
    let [preNation, preG, preS, preB] = arr[i - 1];
    if (g > preG) higherThanPre(nation, preNation);
    else if (g < preG) lowerThanPre(nation, preNation);
    else {
        if (s > preS) higherThanPre(nation, preNation);
        else if (s < preS) lowerThanPre(nation, preNation);
        else {
            if (b > preB) higherThanPre(nation, preNation);
            else if (b < preB) lowerThanPre(nation, preNation);
            else {
                sameWithPre(nation, preNation);
                rank[arr[i - add][0]] += 1;
            }
        }
    }
}
console.log(rank[K]);
console.log(rank);

function higherThanPre(nation, preNation) {
    rank[nation] = rank[preNation];
    rank.forEach((e) => {
        if (e === preNation) rank[preNation] += 1;
    });
}
function lowerThanPre(nation, preNation) {
    rank[nation] = rank[preNation] + 1;
}
function sameWithPre(nation, preNation) {
    rank[nation] = rank[preNation];
    add++;
}

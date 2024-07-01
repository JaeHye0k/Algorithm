## 문제

[BOJ9375\_패션왕 신해빈](https://www.acmicpc.net/problem/9375)

## 코드

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let T = +input[0];
let idx = 1;
let answer = '';

while (T--) {
    const n = +input[idx++];
    const cloth = input.slice(idx, idx + n).map((e) => e.trim().split(' '));
    idx += n;
    const obj = {};
    // 옷의 종류별 개수 구하기
    for (let i = 0; i < n; i++) {
        const type = cloth[i][1];
        if (obj[type]) obj[type] += 1;
        else obj[type] = 1;
    }

    const values = Object.values(obj);
    let count = values.reduce((acc, cur) => acc * (cur + 1), 1) - 1;
    answer += count + '\n';
}
console.log(answer.trimEnd());
```

![](https://velog.velcdn.com/images/ahhpc2012/post/71b12806-56fa-43cf-afca-01f1bc1e5ff5/image.png)

## 접근법

>

-   옷의 종류별 개수를 구해서 객체에 저장한다. 옷의 종류가 key가 되고, 개수가 value가 된다.
-   옷의 종류별로 옷을 입는 경우와 안입는 경우가 있다. 예를 들어 `headgear: 2, eyewear: 1`일때,
    `headgear`를 입는 경우 2가지 + 안입는 경우 1가지, `eyewear`를 입는 경우 1가지 + 안입는 경우 1가지가 있다.
    따라서 $(2+1)\times(1+1)$를 하면 총 6가지 경우의 수가 있는데, 전부 안입을 경우 알몸이 되므로 해당 경우는 빼서 총 5가지 경우의 수가 된다.

## 요구사항 분석

입력으로 여러 개의 서로 다른 단어가 주어질 때, 첫 번째 단어와 "비슷한 단어"가 모두 몇 개인지 찾아 출력하시오. 모든 단어는 영문 알파벳 대문자로 이루어져 있다.

-   같은 구성이란?
    1. 두 개의 단어가 같은 종류의 문자로 이루어져 있고,
    2. 같은 문자가 같은 개수만큼 있는 경우
-   비슷한 단어란?
    두 단어가 같은 구성인 경우 또는 한 단어에서 한 문자를 더하거나, 빼거나, 다른 문자로 교체했을 때 같은 구성이 되는 경우

단어의 개수: $N \le 100$
단어의 길이: $L \le 10$

## 접근법

-   같은 구성인 경우 두 단어의 길이 차이는 0이다.
-   비슷한 단어일 경우 단어의 길이 차이는 +1, -1, 0 이다.
-   위 경우 외에는 전부 비슷한 단어가 될 수 없다.
-   길이 차이가 0인 경우에는 두 가지로 경우로 나뉜다.
    -   같은 구성인 경우
    -   한 문자를 교체 했을때 같은 구성이 되는 경우
-   알파벳별 개수 차이를 비교한다.
    -   동일한 알파벳이 동일한 개수라면 "같은 구성"
    -   서로 다른 알파벳의 개수가 1개라면 "비슷한 단어"

## 설계

-   기준 단어의 알파벳별 개수를 구한다.

-   같은 구성인지 판별하는 기능 $O(L)$
    -   비교 단어를 순회해서 알파벳의 개수 구하기
    -   기준 단어와 비교 단어의 알파벳별 개수가 동일하다면 같은 구성
    -   알파벳별 개수가 한 개만 다르다면 비슷한 단어
-   ## 알파벳별 개수 비교 기능 $O(L)$
-   알파벳별 개수를 구할 때 어떤 자료구조를 사용할 것인가?
    1.  배열: 길이 26(알파벳 대문자의 개수)만큼의 배열을 만들어서 카운트
    2.  객체: 알파벳을 key값으로 하여 카운트

## 첫 번째 시도 (실패 6%)

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((str) => str.trimEnd());
const N = +input[0];
const standard = input[1];
const compares = input.slice(2);
let answer = 0;

const stdObj = {};
countEachAlphabet(standard, stdObj);

for (let i = 0; i < compares.length; i++) {
    const cmpObj = {};
    countEachAlphabet(compares[i], cmpObj);
    const diff = compareAlphabetCount(cmpObj);
    if (diff <= 1) answer++;
}

console.log(answer);

// 알파벳별 개수 구하기
function countEachAlphabet(str, obj) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!obj[char]) obj[char] = 1;
        else obj[char] += 1;
    }
}

// 알파벳별 개수 비교
function compareAlphabetCount(cmpObj) {
    let diff = 0;
    for (const std in stdObj) {
        // 비교 단어에 아예 해당 알파벳이 없다면
        if (!cmpObj[std]) diff += stdObj[std];
        // 비교 단어에 해당 알파벳이 존재한다면
        else diff += Math.abs(stdObj[std] - cmpObj[std]);
    }
    return diff;
}
```

비교 단어의 길이가 더 길 경우 해당 알파벳은 비교하지 못하고 끝나버림

## 두 번째 시도 (실패 18%)

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((str) => str.trimEnd());
const N = +input[0];
const standard = input[1];
const compares = input.slice(2);
let answer = 0;

const stdMap = new Map();
countEachAlphabet(standard, stdMap);

for (let i = 0; i < compares.length; i++) {
    const cmpMap = new Map();
    countEachAlphabet(compares[i], cmpMap);
    const diff = compareAlphabetCount(cmpMap);
    if (diff <= 1) answer++;
}

console.log(answer);

// 알파벳별 개수 구하기
function countEachAlphabet(str, map) {
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!map.has(char)) map.set(char, 1);
        else map.set(char, map.get(char) + 1);
    }
}

// 알파벳별 개수 비교
function compareAlphabetCount(cmpMap) {
    let diff = 0;
    let longerMap;
    let shorterMap;
    if (stdMap.size > cmpMap.size) {
        longerMap = stdMap;
        shorterMap = cmpMap;
    } else {
        longerMap = cmpMap;
        shorterMap = stdMap;
    }
    for (const [std, value] of longerMap) {
        // 비교 단어에 아예 해당 알파벳이 없다면
        if (!shorterMap.has(std)) diff += value;
        // 비교 단어에 해당 알파벳이 존재한다면
        else diff += Math.abs(value - shorterMap.get(std));
    }
    return diff;
}
```

"DOLL" "DOG"인 경우 서로 다른 알파벳이 3개인데 2개라고 나옴

## 세 번째 시도 (실패 6%)

```js
...

// 알파벳별 개수 비교
function compareAlphabetCount(cmpMap) {
    const newMap = new Map([...stdMap]);
    let diff = 0;

    for (const [cmp, value] of cmpMap) {
        // 해당 알파벳이 없다면 해당 알파벳의 개수 저장
        if (!newMap.has(cmp)) newMap.set(cmp, value);
        // 비교 단어에 해당 알파벳이 존재한다면 두 알파벳의 개수 차이 저장
        else newMap.set(cmp, Math.abs(newMap.get(cmp) - value));
    }

    for (const [char, count] of newMap) {
        diff += count;
    }
    return diff;
}
```

### 원인

한 글자만 치환하면 비슷한 단어가 되는 경우를 제대로 처리하지 못함

### 반례

```
2
ABC
ABD

answer: 1
output: 0
```

## 네 번째 시도 (정답)

```js
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs')
    .readFileSync(filePath)
    .toString()
    .trim()
    .split('\n')
    .map((str) => str.trimEnd());
const N = +input[0];
const standard = input[1];
const compares = input.slice(2);
let answer = 0;

String.prototype.splice = function (start = 0, len = this.length) {
    return this.slice(0, start) + this.slice(start + len);
};

for (let i = 0; i < compares.length; i++) {
    let cmp = compares[i];
    let std = standard;
    // 길이 차이가 1보다 클 경우 비슷한 단어가 될 수 없음
    if (Math.abs(std.length - cmp.length) > 1) continue;
    if (std.length < cmp.length) [std, cmp] = [cmp, std];
    for (let j = 0; j < cmp.length; j++) {
        const idx = std.indexOf(cmp[j]);
        if (idx !== -1) std = std.splice(idx, 1);
    }
    if (std.length <= 1) answer++;
}

console.log(answer);
```

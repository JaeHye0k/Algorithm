## 문제

[BOJ1107\_리모컨](https://www.acmicpc.net/problem/1107)

## 풀이 과정

해당 문제는 접근법이 잘 떠오르지 않았다.
처음엔 목표 채널 `N`을 `split()`으로 나눠주고 각각의 자릿수에 해당하는 버튼이 고장나있는지 아닌지 확인하여 고장나지 않았다면 해당 버튼을 누르고 고장났다면 인접한 버튼(절대값의 차이가 적은 버튼)중 고장나지 않은 버튼을 누르게 하려고 했지만 아래와 같은 상황에서는 어떻게 처리해야 할지 떠오르지 않았다.

예를 들어 `N=9999` 이고 리모컨의 `9`번 버튼이 고장났다고 했을 때 위와 같은 접근법을 적용하면 `8888`채널로 이동한 뒤 `9999`까지 `+`버튼으로 이동할 것이다.
하지만 실제로는 `10000`번 채널로 이동한 뒤 `-`버튼을 한 번만 누르면 `9999`채널에 도착할 수 있다.

위와 같은 상황을 처리하기가 어려워서 다른 분들의 코드를 참고해서 아래 코드를 작성했다.

## 코드

```javascript
const filePath = process.platform === 'linux' ? '/dev/stdin' : './Javascript/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input.map(Number);
const broken = M ? input[2].split(' ') : []; // 고장난 버튼이 없는 경우도 고려한다.
const maxChannel = N * 2 + 100;
let count = Math.abs(N - 100); // 버튼 누른 횟수

for (let i = 0; i <= maxChannel; i++) {
    const numStr = i.toString();
    const strLen = numStr.length;
    let isValid = true;

    for (let c of numStr) {
        // 지금 누른 버튼중에 고장난 버튼이 포함되어 있다면
        if (broken.includes(c)) {
            isValid = false;
            break;
        }
    }
    if (isValid) {
        count = Math.min(count, strLen + Math.abs(N - i));
    }
}

console.log(count);
```

### 코드 설명

문제를 잘 읽어보면 채널의 수는 '무한대'고, 수빈이가 이동할 목표 채널의 범위는 $$0 \le N \le 500,000$$ 이다.

만약 `N=500,000`이고, 고장난 버튼은 `[3,4,5]`라고 했을 때 2랑 9번 버튼을 눌러서 `299,999`채널로 이동한 뒤 `+`버튼으로 `500,000`채널까지 이동하는 것 보다 6과 0번 버튼을 눌러서 `600,000` 채널로 이동한 뒤 `-` 버튼을 이용해서 `500,000` 채널로 이동하는 것이 더 빠르기 때문에 이러한 경우를 고려하라는 뜻이다.

따라서 `i`의 범위를 500,000\*2인 0~1,000,000까지로 설정해주어 0부터 1,000,000까지 모든 버튼을 눌러보도록 하면 되고 또는 N\*2+100(초기 채널)을 해주어도 된다. 만약 현재 누른 숫자 버튼들 중 고장난 버튼이 포함되어 있다면(`brokens.includes(c)`) 해당 번호는 스킵하고 지나가도록 했고, 현재 버튼이 전부 멀쩡한 버튼이라면 (`if(isValid)`) 기존에 있던 버튼 횟수(`count`)와, 'i번 채널로 이동하기 위해 숫자 버튼을 누른 횟수' + 'i번 채널에서 부터 N번 채널까지 + 또는 - 버튼을 눌러서 이동하는 횟수' 비교하여 횟수가 더 적은 값으로 `count`를 갱신한다. (`Math.min(count, strLen + Math.abs(N - i))`)

![](https://velog.velcdn.com/images/ahhpc2012/post/8ade59d6-5cf5-4258-ac05-8259fcd641c5/image.png)

class Queue {
    constructor() {
        this.storage = {};
        this.front = 0;
        this.rear = 0;
    }
    size() {
        if (this.storage[this.rear] === undefined) return 0;
        return this.rear - this.front + 1;
    }
    enqueue(value) {
        if (this.size() === 0) {
            this.storage["0"] = value;
        } else {
            this.rear++;
            this.storage[this.rear] = value;
        }
    }
    dequeue() {
        let temp = this.storage[this.front];
        delete this.storage[this.front];

        if (this.front === this.rear) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front++;
        }
        return temp;
    }
}
function solution(begin, target, words) {
    if (!words.some((e) => e === target)) return 0; // words에 target 단어가 없을 경우

    const n = words.length; // words의 길이
    const wLen = begin.length; // 단어 하나의 길이
    let answer = 0;

    const visited = Array.from({ length: n }, () => false);
    const queue = new Queue();
    queue.enqueue([begin, 1]);
    while (queue.size()) {
        let [cur, count] = queue.dequeue();
        if (cur === target) break; // 현재 단어가 target과 일치하다면 반복문 중단
        words.forEach((word, i) => {
            if (!visited[i]) {
                // 방문하지 않은 단어라면
                let splitCur = cur.split("");
                let splitWord = word.split("");
                let differ = 0;
                // 단어 비교
                for (let i = 0; i < wLen; i++) {
                    if (splitCur[i] !== splitWord[i]) differ++;
                }
                if (differ === 1) {
                    // 하나만 다를 경우
                    queue.enqueue([word, count + 1]); // count++로 해줄경우 증가 안됨
                    visited[i] = true;
                }
            }
        });
        answer = count;
    }
    return answer;
}

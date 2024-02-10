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
    // words에 target이 없을 경우 0 반환
    if (!words.some((e) => e === target)) return 0;

    const n = words.length; // words의 길이
    const wLen = begin.length; // 단어 하나의 길이
    let answer = 0;
    const visited = Array.from({ length: n }, () => false);

    const queue = new Queue();
    queue.enqueue([begin, 0]); // [현재 단어,현재 단계]
    while (queue.size()) {
        let [cur, count] = queue.dequeue();
        // 현재 단어가 target과 일치하다면 반복문 중단
        if (cur === target) break;
        words.forEach((word, i) => {
            // 방문하지 않은 단어라면
            if (!visited[i]) {
                let splitCur = cur.split("");
                let splitWord = word.split("");
                let differ = 0;
                // 단어 비교
                for (let i = 0; i < wLen; i++) {
                    if (splitCur[i] !== splitWord[i]) differ++;
                }
                // 한 글자만 다를 경우 큐에 삽입 후 방문 처리
                if (differ === 1) {
                    queue.enqueue([word, count + 1]); // count+1 대신 count++로 할 경우 증가 안됨
                    visited[i] = true;
                }
            }
        });
        answer = count;
    }
    return answer + 1;
}

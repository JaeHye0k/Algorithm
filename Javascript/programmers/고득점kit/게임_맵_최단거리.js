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

        if (this.size() === 0) {
            this.front = 0;
            this.rear = 0;
        } else {
            this.front++;
        }
        return temp;
    }
}

function solution(maps) {
    let n = maps[0].length - 1;
    let m = maps.length - 1;
    let direction = [
        [0, -1],
        [0, 1],
        [-1, 0],
        [1, 0],
    ];
    let queue = new Queue();
    queue.enqueue([0, 0]); // 좌표값 저장
    maps[0][0] = 0;
    while (queue.size()) {
        let [x, y] = queue.dequeue(); // 현재 좌표값
        for (let [dx, dy] of direction) {
            let nx = x + dx;
            let ny = y + dy;
            if (nx < 0 || ny < 0 || nx > n || ny > m) continue; // 범위를 벗어날 경우
            if (maps[ny][nx] === 1) {
                queue.enqueue([x, y]);
                maps[ny][nx] = maps[y][x] + 1;
            }
        }
    }
    return maps[n][m] === 1 ? -1 : maps[n][m] + 1;
}

let answer = solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
]);
console.log(answer);

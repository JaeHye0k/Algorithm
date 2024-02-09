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
    let xLen = maps[0].length;
    let yLen = maps.length;
    let xGoal = xLen - 1;
    let yGoal = yLen - 1;
    let dx = [0, 0, -1, 1];
    let dy = [-1, 1, 0, 0];

    let queue = new Queue();
    queue.enqueue([0, 0, 1]);

    while (queue.size()) {
        let [x, y, count] = queue.dequeue();
        if (x === xGoal && y === yGoal) return count;

        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (nx >= 0 && ny >= 0 && nx < xLen && ny < yLen && maps[ny][nx] === 1) {
                queue.enqueue([nx, ny, count + 1]);
                maps[ny][nx] = 0;
            }
        }
    }
    return -1;
}

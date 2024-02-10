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

function solution(rectangle, characterX, characterY, itemX, itemY) {
    // 모든 좌표를 2배로 늘린다.
    characterX *= 2;
    characterY *= 2;
    itemX *= 2;
    itemY *= 2;
    let doubleRect = rectangle.map((rect) => rect.map((point) => point * 2));

    // 움직일 좌표를 2배로 초기화한다. (51*2=102)
    // 50*2 로 해줄 경우, 입력으로 들어온 좌표값이 1~n 일때 배열은 0~n-1이기 때문에 모든 좌표(x1,y1,x2,y2)를 -1씩 해주어야 한다.
    let range = Array.from({ length: 102 }, () => Array(102).fill(0));

    // 사각형 외부= 0, 테두리=1, 사각형 내부=2
    doubleRect.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1; i <= x2; i++) {
            for (let j = y1; j <= y2; j++) {
                // 사각형 테두리 1로 만들기
                if (i === x1 || i === x2 || j === y1 || j === y2) {
                    if (range[i][j] === 0) range[i][j] = 1;
                }
                // 사각형 내부 2로 채우기
                else range[i][j] = 2;
            }
        }
    });

    // 방향을 담을 배열
    const dx = [0, 0, -1, 1];
    const dy = [-1, 1, 0, 0];

    // BFS 탐색
    const queue = new Queue();
    queue.enqueue([characterX, characterY, 0]); // [x,y,움직인 횟수]
    range[characterX][characterY] = 0; // 방문 처리
    while (queue.size()) {
        let [x, y, count] = queue.dequeue();
        if (x === itemX && y === itemY) return count / 2;
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (range[nx][ny] === 1) {
                queue.enqueue([nx, ny, count + 1]);
                range[nx][ny] = 0;
            }
        }
    }
}

let answer = solution(
    [
        [1, 1, 7, 4],
        [3, 2, 5, 5],
        [4, 3, 6, 9],
        [2, 6, 8, 8],
    ],
    1,
    3,
    7,
    8
);

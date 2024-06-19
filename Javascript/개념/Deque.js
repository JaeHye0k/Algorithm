class Deque {
    constructor() {
        this.deque = {};
        this.front = 0;
        this.rear = 0;
    }
    pushFront(element) {
        if (this.deque[this.front] === undefined) this.deque[this.front] = element;
        else {
            this.front--;
            this.deque[this.front] = element;
        }
    }
    popFront() {
        const temp = this.deque[this.front];
        delete this.deque[this.front];
        this.front++;
        if (this.front > this.rear) {
            this.front = this.rear = 0;
        }
        return temp;
    }
    pushBack(element) {
        if (this.deque[this.rear] === undefined) this.deque[this.rear] = element;
        else {
            this.rear++;
            this.deque[this.rear] = element;
        }
    }
    popBack() {
        const temp = this.deque[this.rear];
        delete this.deque[this.rear];
        this.rear--;
        if (this.front > this.rear) {
            this.front = this.rear = 0;
        }
        return temp;
    }
    size() {
        if (this.deque[this.front] === undefined) return 0;
        return this.rear - this.front + 1;
    }
}

const deque = new Deque();
deque.pushFront(0);
console.log(deque.size()); // 1
deque.pushFront(1);
console.log(deque.popBack()); // 0
console.log(deque.popFront()); // 1
deque.pushBack(2);
console.log(deque.popFront()); // 2
console.log(deque.size()); // 0

class Queue {
    constructor() {
        this.queue = {};
        this.front = 0;
        this.rear = 0;
    }
    enqueue(value) {
        this.queue[this.rear++] = value;
    }
    dequeue() {
        const temp = this.queue[this.front];
        delete this.queue[this.front];
        this.front++;

        if (this.rear <= this.front) {
            this.rear = this.front = 0;
        }

        return temp;
    }
    size() {
        return this.rear - this.front;
    }
}
const queue = new Queue();
console.log(queue.dequeue());
console.log(queue.dequeue());
queue.enqueue(5);
console.log(queue.dequeue());

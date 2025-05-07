class Stack {
    constructor(){
        this.items = [];
    }

    push (val) {
        this.items.push(val);
    }
    
    pop () {
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1]
    }
    
    isEmpty() {
        return (this.items.length === 0)
    }

    size() {
        return this.items.length;
    }

    display() {
        console.log(this.items)
    }
}

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(val) {
        this.items.push(val);
    }

    dequeue(){
        return this.items.shift();
    }

    peek() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    display(){
        console.log(this.items);
    }

}

// stack exercise
function isBalanced(str) {
    let s = new Stack();
    for (char of str){
        if (str[char] === "("){
            s.push(1);
        } else if (char[i] === ")") {
            if (s.isEmpty()){ return false};
            s.pop();
        }
    }

    return s.isEmpty();
}

//stack exercise
function reverse(str) {
    let s = new Stack();
    let result = "";
    for (let i = 0; i < str.length; i++){
        s.push(str[i]);
    }

    while (!s.isEmpty()) {
        result += s.pop();
    }
    return result

}

// queue exercise
function firstUnique(str) {
    
    let q = new Queue();
    let counter = {};
    for (let char of str) {
        q.enqueue(char);
        (char in counter) ? counter[char] += 1 : counter[char] = 1;
    }

    while (q.peek()){
        if (counter[q.peek()] === 1) {
            return q.dequeue();
        } else {
            q.dequeue()
        };
    }

    return undefined;
}

// queue and binary tree concept
function generateBinary(num){
    if (num <= 0) return [];

    let q = new Queue();
    let result = [];
    q.enqueue("1")
    while ( result.length < num) {
        let current = q.dequeue();
        result.push(current);
        q.enqueue(current + "0");
        q.enqueue(current + "1");
    }
    return result;
}


const n = 5;
console.log(generateBinary(5));

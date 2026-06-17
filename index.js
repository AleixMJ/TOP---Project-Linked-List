class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(value) {

        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {            
            this.tail.nextNode = newNode;
            this.tail = newNode;
        }
    }

    prepend(value) {
        const newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {            
            newNode.nextNode = this.head;
            this.head = newNode;
        }
    }

};

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        
    }

};

export {LinkedList};
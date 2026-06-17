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

    size() {
        let total = 0;
        let currentNode = this.head;

        while (currentNode !== null) {
            total++;
            currentNode = currentNode.nextNode;
        }
        return total;

    }

    getHead() {

        return this.head ? this.head.value : undefined;
    }

    getTail() {

        return this.tail ? this.tail.value : undefined;
    }

    at(index) {

        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode !== null) {
            if (currentIndex === index) {
                return currentNode.value;
            }
            currentIndex++;
            currentNode = currentNode.nextNode;


        }

        return undefined;
    }

    pop() {
        if (this.head === null) {
            return undefined;
        }

        let popNode = this.head;
        this.head = this.head.nextNode;

        if (this.head === null) {
            this.tail = null;
        }

        return popNode.value;
    }

    contains(value) {

        let currentNode = this.head;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }
            currentNode = currentNode.nextNode;
        }

        return false
        
    }

};

class Node {
    constructor(value) {
        this.value = value;
        this.nextNode = null;
        
    }

};

export {LinkedList};
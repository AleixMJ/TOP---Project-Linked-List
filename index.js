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
    findIndex(value) {
        let currentNode = this.head;
        let index = 0;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return index
            }
            currentNode = currentNode.nextNode;
            index++;
        }

        return -1;
    }

    toString() {
        let currentNode = this.head;

        if (currentNode === null) {
            return "";
        }


        let string = `( ${currentNode.value} )`;

        while (currentNode !== null) {

            if (currentNode.nextNode === null) {
                return string + " -> null";
            }
            currentNode = currentNode.nextNode;
            string += ` -> ( ${currentNode.value} )`;
        }

    }

    insertAt(index, ...values) {

        // Boundary checks

        if (index < 0 || index > this.size()) {
            throw new RangeError("Index out of bounds");
        }
        
        if (values.length === 0) return;


        // dummy node to manage Index 0 bug
        let dummy = new Node(null);
        dummy.nextNode = this.head;

        // Main logic

        let currentIndex = 0;
        let currentNode = dummy;

        while (currentNode !== null) {
            if (currentIndex === index) {

                let lastNode = currentNode.nextNode;
                values.forEach((e) => {
                    currentNode.nextNode = new Node(e);
                    currentNode = currentNode.nextNode;
                }) 

                currentNode.nextNode = lastNode;

                // update pointers
                this.head = dummy.nextNode;
                if(lastNode === null) {
                    this.tail = currentNode;
                }
                return
            }
            currentNode = currentNode.nextNode;
            currentIndex++;

        }

        
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) {
            throw new RangeError("Index out of bounds");
        }
        // dummy node to manage Index 0 bug
        let dummy = new Node(null);
        dummy.nextNode = this.head;

        let currentIndex = 0
        let currentNode = dummy;
        

        while (currentNode !== null) {
            if (currentIndex === index) {
            let toDeleteNode = currentNode.nextNode;
            currentNode.nextNode = toDeleteNode.nextNode;

            // update pointers
            this.head = dummy.nextNode;
            if (currentNode.nextNode === null) {
                this.tail = currentNode;
            }
            return

            }
            currentIndex++;
            currentNode = currentNode.nextNode;
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
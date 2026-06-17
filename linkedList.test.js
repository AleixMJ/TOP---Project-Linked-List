import { LinkedList } from "./index.js";

describe('LinkedList', () => {
    
    let list;
    beforeEach(() => {
        list = new LinkedList();
    });

        // --- Tests for append() ---
        describe('prepend(value)', () => {
            test('should append nodes correctly to an empty list', () => {
            list.append(10);

            expect(list.head.value).toBe(10);
            expect(list.tail.value).toBe(10);
            expect(list.head.nextNode).toBeNull();
    });

    test('should append multiple nodes correctly', () => {
        list.append(10);
        list.append(20);

        expect(list.head.value).toBe(10);
        expect(list.tail.value).toBe(20);
        expect(list.head.nextNode.value).toBe(20);
    });
    });
    // --- Tests for prepend(value) ---
    describe('prepend(value)', () => {
        test('should add a node to the start of an empty list', () => {
            list.prepend(10);
            expect(list.head.value).toBe(10);
            expect(list.tail.value).toBe(10);
        });

        test('should add a node to the start of a populated list', () => {
            list.prepend(20);
            list.prepend(10); // 10 should now be the new head
            
            expect(list.head.value).toBe(10);
            expect(list.head.nextNode.value).toBe(20);
            expect(list.tail.value).toBe(20);
        });
    });

    // --- Tests for size() ---
    describe('size()', () => {
        test('should return 0 for an empty list', () => {
            expect(list.size()).toBe(0);
        });

        test('should return the correct total number of nodes', () => {
            list.append(10);
            list.append(20);
            list.prepend(5);
            expect(list.size()).toBe(3);
        });
    });

    // --- Tests for head() ---
    describe('getHead()', () => {
        test('should return undefined if the list is empty', () => {
            expect(list.getHead()).toBeUndefined();
        });

        test('should return the value of the first node', () => {
            list.append(50);
            list.append(100);
            expect(list.getHead()).toBe(50);
        });
    });

    // --- Tests for tail() ---
    describe('getTail()', () => {
        test('should return undefined if the list is empty', () => {
            expect(list.getTail()).toBeUndefined();
        });

        test('should return the value of the final node', () => {
            list.append(50);
            list.append(100);
            expect(list.getTail()).toBe(100);
        });
    });

    // --- Tests for at(index) ---
    describe('at(index)', () => {
        test('should return null or undefined if index is out of bounds or list is empty', () => {
            expect(list.at(0)).toBeFalsy();
            
            list.append(10);
            expect(list.at(5)).toBeFalsy();
        });

        test('should return the node at the specific index', () => {
            list.append(10); // Index 0
            list.append(20); // Index 1
            list.append(30); // Index 2

            expect(list.at(0)).toBe(10);
            expect(list.at(1)).toBe(20);
            expect(list.at(2)).toBe(30);
        });
    });

    // --- Tests for pop() ---
    describe('pop()', () => {
        test('should return undefined if the list is empty', () => {
            expect(list.pop()).toBeUndefined();
        });

        test('should remove the head node and return its value', () => {
            list.append(10);
            list.append(20);
            list.append(30);

            // Popping should remove the first element (10) and return its value
            expect(list.pop()).toBe(10);
            
            // The new head should now be 20
            expect(list.getHead()).toBe(20); 
        });

        test('should leave the list empty and clear pointers if it only had one element', () => {
            list.append(50);
            
            expect(list.pop()).toBe(50);
            expect(list.getHead()).toBeUndefined();
        });
    });

    // --- Tests for contains(value) ---
    describe('contains(value)', () => {
        test('should return false if value is not in the list or list is empty', () => {
            expect(list.contains(99)).toBe(false);
        });

        test('should return true if the value exists in the list', () => {
            list.append(10);
            list.append(20);

            expect(list.contains(20)).toBe(true);
            expect(list.contains(10)).toBe(true);
            expect(list.contains(55)).toBe(false);
        });
    });

    // --- Tests for find(value) ---
    describe('find(value)', () => {
        test('should return null if value is not found or list is empty', () => {
            expect(list.find(10)).toBeNull();
        });

        test('should return the correct index of the node containing the value', () => {
            list.append(10); // Index 0
            list.append(20); // Index 1
            list.append(30); // Index 2

            expect(list.find(10)).toBe(0);
            expect(list.find(20)).toBe(1);
            expect(list.find(30)).toBe(2);
            expect(list.find(99)).toBeNull();
        });
    });

    // --- Tests for toString() ---
    describe('toString()', () => {
        test('should return a string showing a null list when empty', () => {
            expect(list.toString()).toBe("null");
        });

        test('should print the list values in the correct format string', () => {
            list.append(10);
            list.append(20);
            list.append(30);

            expect(list.toString()).toBe("( 10 ) -> ( 20 ) -> ( 30 ) -> null");
        });
    });
});
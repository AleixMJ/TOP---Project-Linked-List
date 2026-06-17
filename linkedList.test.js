import { LinkedList } from "./index.js";

describe('LinkedList', () => {
    
    test('should append nodes correctly to an empty list', () => {
        const list = new LinkedList();
        list.append(10);

        expect(list.head.value).toBe(10);
        expect(list.tail.value).toBe(10);
        expect(list.head.nextNode).toBeNull();
    });

    test('should append multiple nodes correctly', () => {
        const list = new LinkedList();
        list.append(10);
        list.append(20);

        expect(list.head.value).toBe(10);
        expect(list.tail.value).toBe(20);
        expect(list.head.nextNode.value).toBe(20);
    });

});
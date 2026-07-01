
const {isEmpty, isNotEmpty, enqueue, dequeue, front} = require('./queue');

test('that queue is empty',() =>{
    const queue = [];
    expect(isEmpty(queue)).toBe(true)

});

test('that queue is not empty',() =>{
    const queue = [1,2,3];
    expect(isEmpty(queue)).toBe(false)
});

test('that to enqueue an element to the queue',() => {
    const queue = [1,2,3,4,5];
    enqueue(queue, 6);
    expect(queue).toEqual([1,2,3,4,5,6])
});

test('that to dequeue an element to the queue',() => {
    const queue = [1,2,3,4,5];
    dequeue(queue, 5);
    expect(queue).toEqual([1,2,3,4])
});

test('the front value of the queue',() => {
    const queue = [2,3,4,5];
    Front(queue);
    expect(queue).toBe(2)

});


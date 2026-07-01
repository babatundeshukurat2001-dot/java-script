
const {isEmpty, isNotEmpty, push, pop, peek, size, clear} = require('./stack');

test('that stack is empty',() =>{
    const stack = [];
    expect(isEmpty(stack)).toBe(true)

});

test('that stack is not empty',() =>{
    const stack = [1,2,3];
    expect(isEmpty(stack)).toBe(false)
});

test('to push an element to the stack',() =>{
    const stack = [2,3,4,5];
    stack.push(6);
    expect(stack).toEqual([2,3,4,5,6])
});

test('to push two elements to the stack',() =>{
    const stack = [2,3,4,5];
    stack.push(6);
    stack.push(7);
    expect(stack).toEqual([2,3,4,5,6,7])
});

test('to pop an element from the stack',() =>{
    const stack = [2,3,4,5];
    stack.pop();
    expect(stack).toEqual([2,3,4])
});

test('to pop two elements from the stack',() =>{
    const stack = [2,3,4,5];
    stack.pop();
    stack.pop();
    expect(stack).toEqual([2,3])
});

test('to peek the top element of stack ',()=>{
    const stack = [2,3,4];
    const topElement = stack[stack.length -1];
    expect(topElement).toBe(4)
});

test('to peek the top element of stack after pushing an element',()=>{
    const stack = [2,3,4];
    stack.push(5);
    const topElement = stack[stack.length -1];
    expect(topElement).toBe(5)
});

test('to peek the top element of stack after popping an element',()=>{
    const stack = [2,3,4];
    stack.pop();
    const topElement = stack[stack.length -1];
    expect(topElement).toBe(3)

});

test('to peek the top element of stack after pushing and popping an element',()=>{
    const stack = [2,3,4];
    stack.push(5);
    stack.pop();
    const topElement = stack[stack.length -1];
    expect(topElement).toBe(4)
});

test('to get the size of the stack',()=>{
    const stack = [2,3,4,5];
    const size = stack.length;
    expect(size).toBe(4)
});

test('to get the size of the stack after pushing an element',()=>{
    const stack = [2,3,4,5];
    stack.push(6);
    const size = stack.length;
    expect(size).toBe(5)
});

test('to get the size of the stack after popping an element',()=>{
    const stack = [2,3,4,5];
    stack.pop();
    const size = stack.length;
    expect(size).toBe(3)
});

test('to get the size of the stack after pushing and popping an element',()=>{
    const stack = [2,3,4,5];
    stack.push(6);
    stack.pop();
    const size = stack.length;
    expect(size).toBe(4)
});

test('to get clear the stack',()=>{
    const stack = [2,3,4,5];
    stack.length = 0;
    expect(stack).toEqual([])
});



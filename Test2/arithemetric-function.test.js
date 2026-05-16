const { add,subtract,multiplication,divide } = require('./arithemetric-function')

//test("",arrow-function)

test("test addition of two positive numbers", () => {
    
    let firstNumber = 82;
    let secondNumber = 18;
    


expect(add(firstNumber,secondNumber)).toBe(100);

})

test("test that addition of a positive and negative number work accurately", () => {

    let firstNumber = 82;
    let secondNumber = -18;
    

expect(add(firstNumber,secondNumber)).toBe(64);
})

test("test that addition of two negative number gives a negative result", () => {

    let firstNumber = -10;
    let secondNumber = -5;
    

expect(add(firstNumber,secondNumber)).toBe(-15);
})

test("test that subtract is working", () => {

    let firstNumber = 50;
    let secondNumber = 30;
    

expect(subtract(firstNumber,secondNumber)).toBe(20);
})

test("test that two negative number subtraction give accurate value", () => {

    let firstNumber = -10;
    let secondNumber = -10;
    

expect(subtract(firstNumber,secondNumber)).toBe(0);
})

test("test that multiplication is working", () => {

    let firstNumber = 12;
    let secondNumber = 2;
    

expect(multiplication(firstNumber,secondNumber)).toBe(24);
})

test("test that two negative number multiplication give accurate value", () => {

    let firstNumber = -10;
    let secondNumber = -10;
    

expect(multiplication(firstNumber,secondNumber)).toBe(100);
})
test("test that divide is working", () => {

    let firstNumber = 12;
    let secondNumber = 2;
    

expect(divide(firstNumber,secondNumber)).toBe(6);
})

test("test that two negative number divide give accurate value", () => {

    let firstNumber = -10;
    let secondNumber = -10;
    

ex
pect(divide(firstNumber,secondNumber)).toBe(1);
})

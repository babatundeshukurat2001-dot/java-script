const { add } = require('./arithemetric-function')

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

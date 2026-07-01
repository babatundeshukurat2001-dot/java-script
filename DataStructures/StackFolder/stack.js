function Stack(){
    const Stack = [1,2,3,4,5];
    return Stack;
}

const isEmpty =(stack) => {  
    if(stack.length === 0){
        return true
    };
    return false;
}

const isNotEmpty= (stack) => {
    return !isEmpty(stack);
}

const push = (stack,element)=>{
    stack.push(element);
}

const pop = (stack,element) =>{
    stack.pop(element);
}

const peek = (stack) =>{
    return stack[stack.length -1];

}

const size = (stack) =>{
    return stack.length;
}

const clear = (stack) =>{
    stack.length = 0;
}
    




module.exports = {isEmpty, isNotEmpty, push, pop, peek, size, clear}
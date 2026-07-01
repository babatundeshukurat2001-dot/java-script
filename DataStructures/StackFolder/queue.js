let queue = []

function isEmpty(queue){  
    if(queue.length === 0){
        return true
    };
    return false;
}
function isNotEmpty (queue){
    return !isEmpty(queue);
}
function enqueue(queue, element){
    queue.push(element);
}
function dequeue(queue, element){
    queue.pop(element)
}
function front(queue, element){
    queue.front(element)
}


module.exports = {isEmpty, isNotEmpty, enqueue, dequeue,front}


function getName(){
    return 'Gustavo Oliveira'
}

function logFn(fn){
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
function getName(){
    return 'Gustavo Oliveira'
}
//Função que retorna a String

function logFn(fn){
    console.log(fn());
}
//Função pega alguma informaçaõ e exibe

//constante que recebe logFn
const logFnResult = logFn;


//logFnResult recebe a string do get name
logFnResult(getName);
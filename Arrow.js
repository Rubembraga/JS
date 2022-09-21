var readlineSync = require('readline-sync')
var inum1 = readlineSync.question("Digite o primeiro numero:")
var inum2 = readlineSync.question("Digite o segundo numero:")
var num1 = Number(inum1)
var num2 = Number(inum2)

function iop(){
    return readlineSync.question('Selecione a Operação: [+ , -, *, /]')
}
function calc(){
    switch(iop()){
        case '+':
            soma(num1,num2)
            break
        case '-':
            sub(num1,num2)
            break
        case '*':
            mult(num1,num2)
            break
        case '/':
            div(num1,num2)
            break
    }
}

var soma = (a,b) => console.log(num1+num2)
var sub = (a,b) => console.log(num1-num2)
var mult = (a,b) => console.log(num1*num2)
var div = (a,b) => console.log(num1/num2)

calc()
function verificaSequenciaFibonacci(numero) {
    let a = 0;
    let b = 1;
    let temp;
    
    while (b <= numero) {
        if (b === numero) {
            return true;
        }
        temp = a;
        a = b;
        b = temp + b;
    }
    
    return false;
}

/* Logo abaixo está o número a ser verificado, pode alterar a qualquer momento, após alterar, pressione (CTRL + S) e execute
o arquivo no terminal para ver a saída com o comando (node teste02.js)
*/

//Número a ser verificado
const numeroInformado = 21;

if (verificaSequenciaFibonacci(numeroInformado)) {
    console.log(`${numeroInformado} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${numeroInformado} não pertence à sequência de Fibonacci.`);
}

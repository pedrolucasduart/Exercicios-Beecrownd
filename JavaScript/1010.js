var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declarando as variáveis
const dadosPeca1 = lines[0].split(' ');
const dadosPeca2 = lines[1].split(' ');

const qtdePeca1 = parseInt(dadosPeca1[1]);
const valorPeca1 = parseFloat(dadosPeca1[2]);

const qtdePeca2 = parseInt(dadosPeca2[1]);
const valorPeca2 = parseFloat(dadosPeca2[2]);

// Calculando o valor a ser pago
const valorPago = qtdePeca1*valorPeca1 + qtdePeca2*valorPeca2


// Imprimindo o valor a ser pago 
console.log(`VALOR A PAGAR: R$ ${valorPago.toFixed(2)}`);
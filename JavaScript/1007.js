var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Declarando e inicializando as variáveis
let A = parseInt(lines[0]);
let B = parseInt(lines[1]);
let C = parseInt(lines[2]);
let D = parseInt(lines[3]);

// Cálculo da diferença
const diferenca = (A * B - C * D)

// Imprimindo o resultado
console.log(`DIFERENCA = ${diferenca}`);
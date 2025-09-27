var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declarando e inicializando as variáveis
const notaA = parseFloat(lines[0]);
const notaB = parseFloat(lines[1]);

const pesoA = 3.5;
const pesoB = 7.5;

// Cálculo da média ponderada
const media = (notaA * pesoA + notaB * pesoB) / (pesoA + pesoB);

// Imprimindo o resultado
console.log(`MEDIA = ${media.toFixed(5)}`);
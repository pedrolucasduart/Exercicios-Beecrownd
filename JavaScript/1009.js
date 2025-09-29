var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = (lines[0]);
let salarioFixo = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);
let comissao = totalVendas * 0.15;

let salarioFinal = salarioFixo + comissao; 
console.log(`TOTAL = R$ ${salarioFinal.toFixed(2)}`);
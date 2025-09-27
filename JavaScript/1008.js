var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

//Declarando e inicializando as variáveis
const numeroFuncionario = parseInt(lines[0]);
const horasTrabalhadas = parseInt(lines[1]);
const valorHora = parseFloat(lines[2]);

// Cálculo do salário
const salario = horasTrabalhadas * valorHora;

// Imprimindo o resultado
console.log(`NUMBER = ${numeroFuncionario}`);
console.log(`SALARY = U$ ${salario.toFixed(2)}`);
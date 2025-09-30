var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let dadosABC = lines[0].split(' ');  
let valorA = parseFloat(dadosABC[0]);
let valorB = parseFloat(dadosABC[1]);
let valorC = parseFloat(dadosABC[2]);

let delta = Math.pow(valorB, 2) - 4 * valorA * valorC;

let r1 = (-valorB + Math.sqrt(delta)) / (2 * valorA);
let r2 = (-valorB - Math.sqrt(delta)) / (2 * valorA);

if (delta > 0 && valorA > 0) {
    console.log(`R1 = ${r1.toFixed(5)}`);
    console.log(`R2 = ${r2.toFixed(5)}`);
} else {
    console.log(`Impossivel calcular`);
}
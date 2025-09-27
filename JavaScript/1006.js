var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function calcularMedia(a, b, c) {
    const pesoA = 2;
    const pesoB = 3;
    const pesoC = 5;
    let media = (a * pesoA + b * pesoB + c * pesoC) / (pesoA + pesoB + pesoC);
    return media;
}

const a = parseFloat(lines[0]);
const b = parseFloat(lines[1]);
const c = parseFloat(lines[2]);

const mediaFinal = calcularMedia(a, b, c);
console.log(`MEDIA = ${mediaFinal.toFixed(1)}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const X = parseInt(lines[0]);
const O = lines[1];

let M = [];
let linha = 2; 

for (let i = 0; i < 12; i++) {
    M[i] = [];
    for (let j = 0; j < 12; j++) {
        M[i][j] = parseFloat(lines[linha]);
        linha++;
    }
}

let soma = 0;
for (let j = 0; j < 12; j++) {
    soma += M[X][j];
}

if (O === 'S') {
    console.log(soma.toFixed(1));
} else if (O === 'M') {
    console.log((soma / 12).toFixed(1));
}
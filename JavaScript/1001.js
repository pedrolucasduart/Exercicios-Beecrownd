var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines[0])
let B = parseInt(lines[1])

let soma = A + B
console.log("X = " + soma)
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const A = parseInt(lines[0]);
const B = parseInt(lines[1]);

const PROD = A * B;

console.log(`PROD = ${PROD}`);
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const raio = parseInt(lines[0]);
const PI = 3.14159;

let volume = 4/3 * PI * Math.pow(raio, 3);

console.log(`VOLUME = ${volume.toFixed(3)}`);
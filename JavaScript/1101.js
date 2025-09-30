var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < lines.length; i++) {
    const partes = lines[i].split(' ');
    const m = parseInt(partes[0]);
    const n = parseInt(partes[1]);

    if (m <= 0 || n <= 0) {
        break;
    }

    let inicio = m;
    let fim = n;

    if (m > n) {
        inicio = n;
        fim = m;
    }

    let soma = 0;
    let resultado = '';

    for (let j = inicio; j <= fim; j++) {
        resultado += j + ' ';
        soma += j;
    }

    resultado += `Sum=${soma}`;
    console.log(resultado);
}
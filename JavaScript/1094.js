var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

function experimentoCobaias() {
    let total = 0;
    let coelhos = 0;
    let ratos = 0;
    let sapos = 0;

    const N = parseInt(lines[0]); 

    for (let i = 1; i <= N; i++) {
        const [quantidadeStr, tipo] = lines[i].split(' ');
        const quantidade = parseInt(quantidadeStr);

        total += quantidade;

        if (tipo === 'C') {
            coelhos += quantidade;
        } else if (tipo === 'R') {
            ratos += quantidade;
        } else if (tipo === 'S') {
            sapos += quantidade;
        }
    }

    console.log(`Total: ${total} cobaias`);
    console.log(`Total de coelhos: ${coelhos}`);
    console.log(`Total de ratos: ${ratos}`);
    console.log(`Total de sapos: ${sapos}`);
    console.log(`Percentual de coelhos: ${(coelhos / total * 100).toFixed(2)} %`);
    console.log(`Percentual de ratos: ${(ratos / total * 100).toFixed(2)} %`);
    console.log(`Percentual de sapos: ${(sapos / total * 100).toFixed(2)} %`);
}

experimentoCobaias();
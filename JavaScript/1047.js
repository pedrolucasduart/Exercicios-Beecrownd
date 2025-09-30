var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let partes = lines[0].split(' ');
let horaInicio = parseInt(partes[0]);
let minutoInicio = parseInt(partes[1]);
let horaFim = parseInt(partes[2]);
let minutoFim = parseInt(partes[3]);

let inicioEmMinutos = horaInicio * 60 + minutoInicio;
let fimEmMinutos = horaFim * 60 + minutoFim;

if (fimEmMinutos <= inicioEmMinutos) {
    fimEmMinutos += 24 * 60; 
}

let duracao = fimEmMinutos - inicioEmMinutos;
let horas = Math.trunc(duracao / 60);
let minutos = duracao % 60;

console.log(`O JOGO DUROU ${horas} HORA(S) E ${minutos} MINUTO(S)`);
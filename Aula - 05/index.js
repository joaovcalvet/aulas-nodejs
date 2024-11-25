/*
    Aula - 05: Introdução a OOP
    Orientação a Objetos é um paradigma de programação.
*/

lines = [
    "Dia 5",
    "08 : 12 : 23",
    "Dia 9",
    "06 : 13 : 23"
];

let dia_inicio = lines[0].split(' ')[1];
let dia_fim = lines[2].split(' ')[1];
let dias_passados = dia_fim - dia_inicio;

let hora_inicial = lines[1].split(' : ');
let final_inicial = (hora_inicial[0] * 3600) + (hora_inicial[1] * 60) + Number(hora_inicial[2]);

let hora_final = lines[3].split(' : ');
let final_final = (hora_final[0] * 3600) + (hora_final[1] * 60) + Number(hora_final[2]);

if(final_final == final_inicial)
{
    return console.log(`${dias_passados} dia(s)
0 hora(s)
0 minuto(s)
0 segundo(s)`);
}

if(final_final > final_inicial)
{
    let diff = final_final - final_inicial;
    let hora = Math.floor(diff / 3600);
    let minuto = Math.floor((diff - (hora * 3600)) / 60);
    let segundo = Math.floor(diff % 60);

    return console.log(`${dias_passados} dia(s)
${hora} hora(s)
${minuto} minuto(s)
${segundo} segundo(s)`);
}

let diff = final_inicial - final_final;
let last = 86400 - diff;

let hora = Math.floor(last / 3600);
let minuto = Math.floor((last - (hora * 3600)) / 60);
let segundo = Math.floor(last % 60);

return console.log(`${dias_passados - 1} dia(s)
${hora} hora(s)
${minuto} minuto(s)
${segundo} segundo(s)`);
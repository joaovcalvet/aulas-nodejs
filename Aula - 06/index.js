/*
    Aula - 06: Tipos de Arquivos
    Arquivos de Texto: São aqueles que nós, seres humanos, conseguimos abrir, ler e interpretar/entender.
    Ex: .php, .json, .xml

    Arquivos Binários: Arquivos codificados em bites, humanamente impossível de ler e interpretar.

    Aula - 06.1: Leitura de Arquivos
    Módulo leitor de arquivos: fs (File System)
    Esse módulo é padrão do Node.js
*/

import fs from "fs";

fs.readFile("./texto.txt", {encoding: 'utf-8'}, function(erro, dados) {

    if(erro)
        console.log("O que aconteceu aqui?: ", erro.message);

    console.log(dados);
});
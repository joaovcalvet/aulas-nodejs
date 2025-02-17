/*
    Aula - 06: Tipos de Arquivos
    Arquivos de Texto: São aqueles que nós, seres humanos, conseguimos abrir, ler e interpretar/entender.
    Ex: .php, .json, .xml

    Arquivos Binários: Arquivos codificados em bites, humanamente impossível de ler e interpretar.

    Aula - 06.1: Leitura de Arquivos
    Módulo para arquivos: fs (File System)
    Esse módulo é padrão do Node.js.
    Método "readFile('caminho do arquivo', 'opções', callback)".

    Aula - 06.2: Escrita em Arquivos
    Utilizando o módulo fs, vamos escrever em um arquivo.
    Método "writeFile('caminho do arquivo', 'Novo conteúdo a ser escrito', callback)";
*/

import fs from "fs";

fs.writeFileSync("./texto.txt", "Novo texto enviado", function(erro) {
    if(erro)
        console.log("O que aconteceu aqui?: ", erro);
});

fs.readFile("./texto.txt", {encoding: 'utf-8'}, function(erro, dados) {

    if(erro)
        console.log("O que aconteceu aqui?: ", erro.message);

    console.log(dados);
});
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

    Aula - 06.3: Leitor/Escritor de JSON
    Converter plain/text vindo de um JSON para um objeto JavaScript
    Objeto JSON e Método "parse(texto)"
*/

import { asyncHandler } from "./Functions/general.js";
import { reader, writer } from "./Functions/files.js";

(async function run() {

    var test = await asyncHandler(reader());
    var text = await asyncHandler(reader("./texto.txt"));
    var json = await asyncHandler(reader("./user.json"));   
    
    console.log(test);
    console.log(text);
    console.log(json);

    json = JSON.parse(json);
    json.nome = "Marcelo Mistake";

    await asyncHandler(writer("./texto.txt", JSON.stringify(json)));
    console.log(await asyncHandler(reader("./texto.txt")));
})();
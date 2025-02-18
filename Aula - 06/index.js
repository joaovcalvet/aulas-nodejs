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

    Aula - 06.4: CSV
    Planilha onde as colunas são separadas por virgula

    Aula - 06.5: Reader
    Montagem da função "reader"

    Aula - 06.6: Table
    Montagem da classe "table"
*/

import Table from "./Classes/Table.js";
import { asyncHandler } from "./Functions/general.js";
import { reader, writer, processCsv } from "./Functions/files.js";

async function run() {

    var test = await asyncHandler(reader());
    var text = await asyncHandler(reader("./texto.txt"));
    var json = await asyncHandler(reader("./user.json"));   
    
    console.log(test);
    console.log(text);
    console.log(json);

    json = JSON.parse(json);
    json.nome = "João Victor Calvet";

    await asyncHandler(writer("./Storage/texto.txt", JSON.stringify(json)));
    console.log(await asyncHandler(reader("./Storage/texto.txt")));
};

async function main() {
    
    let data = await asyncHandler(reader("./Storage/user.csv"));
    let csv = processCsv(data);

    let table = new Table(csv);
    console.log(table);
}

main();
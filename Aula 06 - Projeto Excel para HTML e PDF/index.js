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

    Aula - 06.7: Campos Virtuais
    Campos virtuais são uma forma de chamar um método de uma classe
    como se fosse um field/atributo normalmente

    Utiliza-se a palavra "get" antes do nome do método
    (Métodos de campos virtuais sempre devem retornar algo)

    Aula - 06.8: HTMLParser
    Classe responsável por transformar dados passados em uma tabela
    html. Para isso, é necessário ter um template base para a tabela.

    Aula - 06.9: Writer
    Montagem da função "writer"

    Aula - 06.10: PDFWriter
    Montagem da função "PdfWriter", responsável por receber uma string e
    devolver um arquivo pdf com o conteúdo passado.
*/


import Table from "./Classes/Table.js";
import { asyncHandler } from "./Functions/general.js";
import { reader, writer, processCsv, WritePDF } from "./Functions/files.js";
import HtmlParser from "./Classes/HtmlParser/HtmlParser.js";

async function run() {

    var test = await asyncHandler(reader());
    var text = await asyncHandler(reader("./Storage/texto.txt"));
    var json = await asyncHandler(reader("./Storage/user.json"));   
    
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

    console.log(table.columnsCount);
    console.log(table.rowsCount);

    var html = await HtmlParser.Parser({header: table.header, body: table.rows});
    console.log(html);

    writer("./" + Date.now() + " - minhaTabela.html", html);
    WritePDF("./meuPDF.pdf", html);
}

main();
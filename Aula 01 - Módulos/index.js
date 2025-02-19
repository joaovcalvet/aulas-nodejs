/*
    Aula - 01.2: Primeira Aplicação HTTP
*/

const http = require("http");

console.log("Iniciando Servidor");

http.createServer(function(request, response) {
    response.end("Bem vindo(a) ao Meu Website!");
}).listen("8181");

console.log("Servidor Rodando!")
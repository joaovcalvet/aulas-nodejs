/*
    Aula - 02: NPM
    NPM - Node Package Manager ou Gerenciador de Pacotes do Node
    Utilizado para puxar e instalar pacotes de terceiros para a aplicação/projeto Node,
    além de gerenciar algumas configurações do projeto Node.

    Inicializamos um projeto Node através do comando "node init"
    Rodar esse comando criou o arquivo "package.json"
    Esse arquivo é como o "RG" do projeto. Nele é contido todas as informações,
    dependências e dados do projeto, assim auxiliando o próprio desenvolvedor e
    terceiros que eventualmente podem utilizar do mesmo projeto.

    Após rodamos o comando "npm install express --save"
    Esse comando é responsável por instalar a biblioteca/framework do express no nosso projeto.

    Sobre a opção "--save"
    '''
        Módulos do Node instalados com a opção --save são incluídas na lista dependencies no arquivo package.json.
        Posteriormente, executando npm install no diretório app irá automaticamente instalar os módulos na lista de dependências.
        - https://expressjs.com/pt-br/starter/installing.html
    '''

    Sobre o Express.js
    '''
        Express.js (ou apenas Express) é um framework para Node.js que fornece recursos mínimos para construção de servidores web (HTTP).
        - https://pt.wikipedia.org/wiki/Express.js
    '''
*/

const express = require("express"); // Importando o Express
const app = express(); // Inicializando o Express

app.listen(8181, function(error) {
    if(error)
    {
        console.log("Ocorreu um erro ao inicializar o Servidor.");
        return;
    }

    console.log("Servidor Inicializado!");
});
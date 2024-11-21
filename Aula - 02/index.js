/*
    Aula - 02: NPM e Express
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

/*
    Aula - 02.2: Rotas
    Rotas são os caminhos para as páginas da sua aplicação web
*/

/*
    Aula - 02.3: Carregamento Automático
    Para acabar com a reinicialização manual do servidor no nosso projeto, podemos utilizar
    um pacote NodeJS chamado "nodemon" através do comando "npm install nodemon -g"

    Sobre a opção "-g"
    Essa opção é utilizada para instalar um módulo globalmente. Ou seja, ele ficará instalaado
    na máquina e não no projeto. Dessa forma, você tem acesso ao módulo apenas utilizando o comando:
    "nodemon (nome do arquivo a ser rodado)".
*/

/*
    Aula - 02.4: Parâmetros
    Forma de passar valores dinâmicos a uma rota.
*/

/*
    Aula - 02.5: Query Params
*/

const express = require("express"); // Importando o Express
const app = express(); // Inicializando o Express

//Rotas
/*
    REQ => DADOS ENVIADOS PELO USUÁRIO
    RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
*/

///Home
app.get("/", function(req, res) {
    return res.send("Bem Vindo(a) ao meu Website!");
});

///Contato
app.get("/contato", function(req, res) {
    return res.send("Você está na página de Contatos.<br>Se desejar, mande um email para: testedeemail@gmail.com")
});

app.get("/contato/:nome", function(req, res) {
    let nome = req.params.nome;
    return res.send(`Olá ${nome}! Que bom ter você aqui.`);
});

///Blog
app.get("/blog/:autor?", function(req, res) {
    let autor = req.params.autor;

    if(autor)
        return res.send(`O autor desse blog se chama ${autor}.`);
    return res.send("Você está na página do Blog!");
});

///Canal
app.get("/canal", function(req, res) {
    return res.send("Você está na página de canais!");
});

app.get("/canal/:autor", function(req, res) {
    if(Object.keys(req.query).length > 0)
        return res.send(`Você está no canal ${req.params.autor} assistindo ao video ${req.query["video"]}`);

    return res.send("Você está na home do canal " + req.params.autor);
});

//Inicializando Servidor
app.listen(8181, function(error) {
    if(error)
    {
        console.log("Ocorreu um erro ao inicializar o Servidor.");
        return;
    }

    console.log("Servidor Inicializado!");
});
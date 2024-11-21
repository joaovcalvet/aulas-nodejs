/*
    Aula - 04: Plataforma de Perguntas e Respostas
    Primeiramente vamos instalar o EJS, que é uma biblioteca de templates HTML,
    ou seja, com ele, podemos renderizar HTML no backend e enviar para o Front.
    Ele tem a funcionalidade de adicionar lógica JavaScript ao HTML.

    Para instalar utilizamos o comando: "npm install ejs --save"

    Aula - 04.2: Exibindo Variáveis no HTML
    Podemos renderizar variáveis no HTML utilizando o "EJS".
    Inicialmente, precisamos configurar o EJS como nosso motor de views padrão.
    Para isso utilizamos o método do express "set":

    "app.set('view engine', 'ejs');"

    Após isso, dentro de uma rota, ao invés de devolvermos uma resposta com "send",
    devolvemos ela com "render".

    Passamos no primeiro parâmetro o arquivo ".ejs" que desejamos renderizar e depois um objeto
    contendo os itens, strings, listas ou outros objetos que queremos renderizar na view.

    Para encontrar um arquivo ".ejs" rapidamente, coloque ele dentro de uma pasta chamada "views".
    Dessa forma, o express já saberá onde procurar pelo arquivo.
    "res.render('(nome do arquivo a ser renderizado)', (objeto contendo as variáveis a serem passadas));"

    Sintaxa para renderizar variáveis na view:
    <% (variável) %> - Para estruturas de controle (if, else, foreach);
    <%= (variável) %> - Para printar a variável no console ou página.

    Aula - 04.3: Estruturas Condicionais
    If, else e else if

    Aula - 04.4: Estrutura de Repetição
    Foreach

    Aula - 04.5: Arquivos Estáticos
    Arquivos estáticos são aqueles são entregues ao client sem que sejam processados pelo backend.
    Ex: Javascript no HTML, imagens, CSS e etc...

    Criar pasta "public" (convenção de nome) para arquivos estáticos.
    Settar essa pasta como estática utilizando o comando:
    "app.use(express.static('public'))"

    Estamos tornando esses arquivos publicos, ou seja, qualquer um terá acesso e poderá ver esses
    conteúdos, então, temos que ter cautela com o que vamos publicar.
*/

const express = require('express'); //Importando o Express
const app = express(); // Inicializando o Express na Variável "app"

app.set("view engine", "ejs"); //Settando o motor de visualização
app.use(express.static('public')); // Settando e Expondo a pasta de arquivos estáticos

app.get("/:nome?/:lang?", function(req, res) {

    produtos = [
        {nome: "doritos", preco: 2.45},
        {nome: "ruffles", preco: 3.01}
    ]

    responseObj = {
        nome: req.params.nome,
        lang: req.params.lang,
        empresa: "ferragens ramada",
        inscritos: 8000,
        produtos,
        msg: false
    }

    return res.render("index.ejs", responseObj);
});

app.listen(8181, function(error) {
    if(error)
        return console.log(`Ocorreu um erro ao inicializar o servidor: ${error}`);
    console.log("Servidor Inicializado")
})
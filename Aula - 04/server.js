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

    Aula - 04.6: Bootstrap
    Bootstrap é um framework para HTML que auxilia na construção de páginas web.
    Ele ajuda na criação de interfaces rapidamente.

    Podemos baixar o Bootstrap no seguinte link:
    https://getbootstrap.com/docs/4.5/getting-started/download/

    Importar dependências antes de importar o arquivo do bootstrap.
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>

    P.S: Dependências passivo de mudança, verificar antes de subir.
    P.S: Ao usar estilos próprios, importa-los após o link com o bootstrap.

    Aula - 04.7: Criando Formulário de Perguntas
    Criando o formulário de perguntas no frontend com bootstrap.
    Transformando ele em um card.
    Ajeitando CSS.

    Aula - 04.8: Partials
    Partials nos permite fazer inclusões de snippets HTML em outros arquivos HTML.
    Dessa forma, conseguimos manter um código mais organizado e mais componentezado.

    Houveram mudanças no método para fazer include.
    Antes: <%- include partials/header.ejs %>
    Agora: <%- include('partials/header.ejs') %>

    Aula - 04.8: Capturando Dados do Formulário
    Caapturar dados vindo do corpo da requisição.
    Foi instruido na aula a utilizar uma biblioteca separada, porém, após pesquisa
    descobri que essa biblioteca está defasada e que a mesma foi incorporada ao módulo
    padrão do Express.

    Aproveitei também para reestruturar o projeto, separando em conceitos de rotas e controllers.

    Aula - 04.9: Banco de Dados
    Criando um banco de dados para armazenar as perguntas.
    Na aula, o professor utiliza MySQL para o banco, porém, estou usando sqlite para facilitar minha vida.

    Um pacote chamado "Sequelize" foi adicionado junto com sua biblioteca do sqlite3.
    "npm install sequelize --save"
    "npm install sqlite3 --save"

    Criado um model para as perguntas; Algumas configurações foram passadas para o arquivo de rotas
    por fazer mais sentido, além de também estar dando problemas com a ordem da injeção das dependências.

    Com o model, já estou conseguindo inserir itens no banco.

    Aula - 04.10: Listando perguntas
    Criado uma tela nova para listar todas as perguntas do banco.

    Aula - 04.11: Ordenação com Sequelize
    Ordernando pela pergunta mais recente.

    Aula - 04.12: Criando Página para Pergunta
    Crie uma nova página, além de uma nova rota e função no controller.
    Utilizei o conceito de parâmetro na rota e uma query específica para um elemento.
    Aproveitei para adicionar uma pasta a mais na estrutura das páginas.

    Aula - 04.13: Front-end Página de Pergunta
    Pequenas alterações no Front da página de uma pergunta.

    Aula - 04.14: Perguntas com Links Dinâmicos
    Adicionado o Link para a página da Pergunta no botão "Responder".

    Aula - 04.15: Model de Resposta
    Criado o model para resposta.
    Ele fará uma ligação com o id de uma pergunta.
*/

const express = require('express'); //Importando o Express
const compression = require('compression'); //Importando o pacote Compression
const routes = require('./configs/routes');
const connection = require('./configs/database');
const app = express(); // Inicializando o Express na Variável "app"

//Database
connection.authenticate();

//Configurações
app.set("view engine", "ejs"); //Settando o motor de visualização
app.use(express.static('public')); // Settando e Expondo a pasta de arquivos estáticos
app.use(compression({ threshold: 2048 })); //Aplicando compressão para melhorar a performance da página
app.use(routes);

//Servindo Aplicação
app.listen(8181, function(error) {
    if(error)
        return console.log(`Ocorreu um erro ao inicializar o servidor: ${error}`);
    console.log("Servidor Inicializado")
});
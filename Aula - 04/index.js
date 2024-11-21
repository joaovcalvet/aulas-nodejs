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

    Aula - 04.7: Criando Formulário de Perguntas
    Criando o formulário de perguntas no frontend com bootstrap.
*/

const express = require('express'); //Importando o Express
const app = express(); // Inicializando o Express na Variável "app"

app.set("view engine", "ejs"); //Settando o motor de visualização
app.use(express.static('public')); // Settando e Expondo a pasta de arquivos estáticos

//Rotas
app.get("/", function(req, res) {
    return res.render("index.ejs");
});

app.listen(8181, function(error) {
    if(error)
        return console.log(`Ocorreu um erro ao inicializar o servidor: ${error}`);
    console.log("Servidor Inicializado")
})
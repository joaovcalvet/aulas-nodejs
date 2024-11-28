class Filme
{
    constructor(){
        this.titulo = "";
        this.ano = 0;
        this.genero = "";
        this.diretor = "";
        this.atores = [];
        this.duracao = 0;
    }

    Reproduzir(){
        console.log("Reproduzindo...");
    }

    Pausar(){
        console.log("Pausado ||");
    }

    Avancar(){
        console.log("Avançar >>");
    }

    Fechar(){
        console.log("Fechar X");
    }
}

var vingadores = new Filme();
vingadores.Avancar();
vingadores.ano = 2014;
vingadores.genero = "ação";
vingadores.titulo = "Vingadores 2";

var batman = new Filme();
batman.titulo = "Batman";
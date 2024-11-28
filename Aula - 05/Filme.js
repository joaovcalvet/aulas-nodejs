class Filme
{
    constructor(titulo, ano, genero, diretor, atores, duracao){
        this.titulo = titulo;
        this.ano = ano;
        this.genero = genero,
        this.diretor = diretor;
        this.atores = atores;
        this.duracao = duracao;
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

var vingadores = new Filme("Vingadores", 2012, "Ação", "Alguem", "2h");
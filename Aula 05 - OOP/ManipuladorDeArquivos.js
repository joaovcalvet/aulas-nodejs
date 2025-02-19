class algo {
    fazerIsso() {
        console.log("to fazendo");
    }
}

export default class ManipuladorDeArquivos extends algo{

    static Leitor() {
        console.log("Arquivo Lido");
    }

    static Escritor() {
        console.log("Arquivo Escrito");
    }

    static Criador() {
        console.log("Arquivo Criado");
    }

    static Destruidor() {
        console.log("Arquivo Destruido");
    }
}
/*
    Aula - 05: Introdução a OOP
    Orientação a Objetos é um paradigma de programação.
    Pilares do OOP:
    - Abstração
    - Encapsulamento
    - Herança
    - Polimorfismo
    - Composição´

    Classificação: Entidades similares que podem ser abstraidas em um conceito único.
    Classe:
        Atributos: Dados da classe
        Métodos: "Ações" da classe´
    Abstração:
        Aspectos essenciais de um contexto qualquer.
        2 entidades iguais podem ter abstrações diferentes dado o contexto.

    Aula - 05.1: Classes VS. Objetos
    A classe pode ser entendida como uma forma, o objeto é o bolo feito.
    A classe é o blueprint para a criação do objeto.

    Aula - 05.2: Atributos da Instância
    Podemos instanciar uma classe (adicionar uma cópia da classe a memória) utilizando
    a palavra reservada "new".

    Cada instância pode ser "construida" com suas próprias variaveis, ou seja, cada
    instância é unica, não podendo acessar os atributos e métodos de outras instâncias
    mesmo que sendo da mesma classe.

    Aula - 05.3: Construtor
    Responsável por gerar a instância da classe memória.
    Ele também facilita a definição de atributos.
    O construtor é uma função, sendo assim, pode ser programado como tal.
    Dentro dele, é declarado os atributos da classe.

    constructor(titulo) {
        this.titulo = titulo;
    }
*/
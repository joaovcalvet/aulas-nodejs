/*
    Aula 07.1: EcmaScript
    Ecma é uma organização que define algumas normas da web.
    O EcmaScript são especificações que a Ecma define para o JS.
    Responsáveis por atualizações na linguagem.

    Aula 07.2: Constantes
    Constantes são variáveis com valores fixos

    Aula 07.3: Variáveis Let
    Forma de declarar uma variável onde sua declaração também
    depende do escopo de bloco.´

    Aula 07.4: Parâmetros Opcionais
    Podemos em funções, criar parâmetros que já possuem um valor pré definido,
    dessa forma, caso o usuário não passe um valor explicito para aquele parâmetro,
    ele utilizará o valor default

    (Parâmetros opcionais sempre devem ser os ultimos na função)
    Ex: funcTeste(a, b, c = 30)
*/

const nome = "João";
// -------------------------------------------------

//Diferença de Escopo
var idade = 21; //Global e local
let sobrenome = "Victor"; //Global, local e bloco
// -------------------------------------------------

//Escopo Global
var nomeVar = "Fabio";
let nomeLet = "Joana";

function func1() {
    //Escopo Local
    var nomeVarLocal = "Marcela";
    let nomeLetLocal = "Lucas";

    //Acesso a variáveis globais no escopo local
    console.log(nomeVar + " e " + nomeVarLocal);
    console.log(nomeLet + " e " + nomeLetLocal);
}

func1();

//Sem acesso a variáveis locais no escopo global
try {
    //Um erro será disparado
    console.log(nomeVar + " e " + nomeVarLocal);
    console.log(nomeLet + " e " + nomeLetLocal);
} catch (error) {
    console.log(error);
}

//------------------------------------------------

if(true) {
    //Escopo de bloco
    var nomeVarBloco = "Maria";
    let nomeLetBloco = "Bianca";
}

//Sem erro ao acessar var de bloco no escopo global
console.log(nomeVarBloco);

//Erro ao acessar let de bloco no escopo global
try {
    console.log(nomeLetBloco);
} catch (error) {
    console.log(error);
}

//------------------------------------------------
function soma(a, b = 10) {
    console.log(a + b);
}

soma(10, 20);
soma(10);
soma();
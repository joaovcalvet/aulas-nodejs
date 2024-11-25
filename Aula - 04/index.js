/*
    Aula - 04: O que é Programação Síncrona
    Programação síncrona é aquela em que cada linha de código é executada sequencialmente, uma após o término da outra.
    Programação Bloqueante, para que o código prossiga, é necessário esperar.

    Aula - 04.02: O que é Programação Assíncrona
    Programação não-bloqueante.
    Códigos rodam em paralelo.

    Aula - 04.03: Callbacks
    Callback é uma função que é passada como argumento para outra função.
    Uteis para funções assíncronas pois garantem que um pedaço de código será executado
    após a espera da finalização da função "pai".

    "setTimeout" por exemplo é uma função que recebe um callback, já que o código só ira executar
    após o tempo determinado ter passado.

    Aula - 04.04: Callbacks+
    Adicionando tratamento de erros e parâmetros ao callback.

    Aula - 04.05: Promises
    Promise é um objeto que representa a conclussão de uma operação assíncrona, sendo ela com
    exito ou falha.
    Dessa maneira, podemos tratar o retorno / outcome da nossa espera de forma mais limpa e adequada.

    Ao ser declarada, uma promise pode falhar ou ter êxito, nesses casos, ou ela foi rejeitada ou resolvida.
    Montamos a promise com uma função que recebe "resolve" para êxito e "reject" para falha.

    Fora do escopo de declaração, quando recebemos o retorno dessa promise, utilizamos o "then" para os sucessos
    e "catch" para as falhas. (Existe também o "finally" que será executado em ambos os casos).

    então temos...
    Declaração:

    function promessa(){
        //Promise é um objeto, então temos que instancia-lo com
        //a palavra reservada "new".
        return new Promise((resolve, reject) => {
            if(true)
                resolve("Função resolvida com êxito!")    ;
            else
                reject(); //Sem valor = undefined
        })
    }

    Chamada:
    promessa().then((valor) => {console.log(valor)});
    promessa().catch((valor) => {console.log("Droga, falhou!")});
    promessa().finally(() => {console.log("Finalmente terminou...")});

    Aula - 04.06: Métodos extras Promise
    Promises tem 2 métodos extras uteis.

    Promise.all
    Esse método recebe um array com diversas funções que retornam promises,
    porém, os métodos then, catch e finally só retornam assim que TODAS as
    funções terminarem de rodar.

    Promise.race
    Esse método também recebe um array com diversas funções que retornam promises,
    porém, o mesmo tem retorno no momento em que a primeira das funções contempladas
    retornar.
*/
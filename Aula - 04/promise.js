function enviarEmail(corpo, para) {
    let passou = true;

    return new Promise((resolve, reject) => {
        if(!passou)
            reject();

        resolve("Passou hein");
    });
}

enviarEmail("Dale", "Dale@master.com")
    .then((resultado) => {
        console.log("Resultado: " + resultado);
    })
    .catch((falha) => {
        //Se não passar nada, valor undefined
        console.log("Erro: " + falha);
    })
    .finally(() => {
        console.log("Finalmente acabou");
    });

//----------------------------------------------------------

function teste1() {
    return new Promise((resolve) => {
        resolve("Resolvido no teste 1");
    });
}

function teste2() {
    return new Promise((resolve) => {
        resolve("Resolvido no teste 2");
    });
}

function teste3() {
    return new Promise((resolve) => {
        resolve("Resolvido no teste 3");
    });
}

Promise.all([
    teste1(),
    teste2(),
    teste3(),
    new Promise((resolve) => {
        resolve("Resolvido no teste 4");
    })
]).then((valores) => {
    console.log(valores);
});

Promise.race([
    teste1(),
    teste2(),
    teste3(),
    new Promise((resolve) => {
        resolve("Resolvido no teste 4");
    })    
]).then((valor) => {
    console.log(valor + " primeiro");
});
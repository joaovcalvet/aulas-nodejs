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
    .finally((resultado) => {
        console.log("Então, o que rolou?: " + resultado);
    });
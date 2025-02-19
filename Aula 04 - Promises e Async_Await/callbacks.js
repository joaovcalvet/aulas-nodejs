function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------    
        `);

        console.log("Seu email acabou de chegar!!");
        callback("Tudo ok");
    }, 5000);
}

function enviarEmailFalha(corpo, para, callback) {
    setTimeout(() => {
        let err = true;

        if(err)
            return callback("Houve um erro com o envio de email!");

        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------    
        `);
        return callback();
    }, 10000);
}

function testeCallback(status) {
    console.log("Esse código está sendo executado na função testeCallback");
    console.log(`Status recebido: ${status}`);
}

function testeStatus(status) {

    if(status != undefined)
        return console.log("Erro ao enviar email: " + status);
    console.log("Tudo ok");
}

console.log("Inicio do envio de e-mail.");
enviarEmail("Oi, meu nome é João!", "teste@gmail.com", testeCallback);
enviarEmailFalha("Dale", "MasterofDale@gmail.com", testeStatus);
console.log("Estamos enviando o seu e-mail!");
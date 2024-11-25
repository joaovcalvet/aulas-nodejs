function enviarEmail(corpo, para, callback) {
    setTimeout(() => {
        console.log(`
            Para: ${para}
            ----------------------------
            ${corpo}
            ----------------------------    
        `);

        console.log("Seu email acabou de chegar!!");
        callback();
    }, 5000);
}

function testeCallback() {
    console.log("Esse código está sendo executado na função testeCallback");
}

console.log("Inicio do envio de e-mail.");
enviarEmail("Oi, meu nome é João!", "teste@gmail.com", testeCallback);
console.log("Estamos enviando o seu e-mail!");
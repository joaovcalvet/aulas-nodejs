function handle(nome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Esse é o seu nome: " + nome);
            reject("Rejeitado");
        }, 2000);
    });
}

function handle2(sobrenome) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Esse é o seu sobrenome: " + sobrenome);
            resolve();
        }, 4000);
    });
}

function handle3(idade) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Essa é a sua idade: " + idade);
            resolve("Resolvido");
        }, 7000);
    });
}

(async function run() {
    try {
        var result1 = await handle("jhon");
    } catch (error) {
        console.log(error)
    }
    console.log("aconteceu dentro");
    try {
        var result2 = await handle2("jhonney");
        var result3 = await handle3("jhonny");
        console.log(result2);
        console.log(result3);
    } catch (error) {
        console.log(error)
    }
})();

console.log("aconteceu depois");
/*
    Aula - 01: Módulos
    Para que o arquivo "app.js" utilize as funções contidas
    nesse arquivo, é necessário que exportemos as mesmas.
*/

module.exports = {
    sum,
    sub,
    mult,
    div
};

function sum(a, b)
{
    return a + b;
}

function sub(a, b)
{
    return a - b;
}

function mult(a, b)
{
    return a * b;
}

function div(a, b)
{
    return a / b;
}
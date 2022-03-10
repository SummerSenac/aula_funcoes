// ------------------------- Função sem parametros com retorno e sem retorno
// let nome = "henning";

// console.log('o nome antes é ', nome)
// chamaNome()
// console.log('o nome depois é ', nome)

// function chamaNome() {
//     // return "Henning" // retorna algo quando é chamada (pode ser armazenado num variavel)
//     nome = "Summer" // alterar o valor de uma variavel (não tem retorno)
// }

//------------------Função com parametro----------------------------------------------

// import fetch from 'node-fetch'

// async function pegarCep(cep) {
//     const response = await fetch(`http://viacep.com.br/ws/${cep}/json/`);
//     const data = await response.json();
//     console.log(data)
// }

// pegarCep('51030300')
// pegarCep('51011060')

// ----------------- Função dentro de função e passando função por paramentro-------------

// function soma(n1, n2, fnDividir, fnPessoa){
//     let soma = n1 + n2
//     let valor = fnDividir(soma, 8)
//     return fnPessoa('Henning', valor)
// }

// function dividir(n1, n2){
//     return n1 / n2
// }

// function pessoaReceber(pessoa, valor){
//     return `pessoa é ${pessoa} vai receber: ${valor}`
// }

// console.log(soma(5,8, dividir, pessoaReceber))

function somar(a, b){
    return a + b
}
function dividir(a, b){
    return a / b
}
function multiplicar(a, b){
    return a * b
}
function subtrair(a, b){
    return a - b
}

const calcular = {
    adicao: somar,
    subtracao: subtrair,
    multiplicacao: multiplicar,
    divisao: dividir
}

console.log(calcular.adicao(55,55))


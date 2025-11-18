/*let a = Number (prompt("Digite um numero"))
let b = Number (prompt("Digite um numero"))

function soma(a,b) {
    return a + b
}

console.log(soma(a,b))*/

/*console.log(soma(10,3))
console.log(soma(5,23))
console.log(soma(53,23))*/

/*const btnSomar = document.querySelector("#soma")

function soma(){
  
    let primeiroValor = Number (prompt("digite o primeiro Valor"))
    let segundoValor = Number (prompt("digite o segundo Valor"))

    let soma = primeiroValor + segundoValor

    alert(soma)
}
btnSomar.addEventListener("click",soma)



const btnsubtracao = document.querySelector("#subtracao")

function subtracao(){
  
    let primeiroValor = Number (prompt("digite o primeiro Valor"))
    let segundoValor = Number (prompt("digite o segundo Valor"))

    let subtracao = primeiroValor - segundoValor

    alert(subtracao)
}

btnsubtracao.addEventListener("click",subtracao)


const btnmultiplicacao = document.querySelector("#multiplicacao")

function multiplicacao(){
  
    let primeiroValor = Number (prompt("digite o primeiro Valor"))
    let segundoValor = Number (prompt("digite o segundo Valor"))

    let multiplicacao = primeiroValor * segundoValor

    alert(multiplicacao)
}

btnmultiplicacao.addEventListener("click",multiplicacao)

const btnDivisao = document.querySelector("#divisao")

function divisao(){
  
    let primeiroValor = Number (prompt("digite o primeiro Valor"))
    let segundoValor = Number (prompt("digite o segundo Valor"))

    let divisao = primeiroValor / segundoValor

    alert(divisao)
}

btnDivisao.addEventListener("click",divisao)*/

const btnSoma = document.querySelector("somar")
const btnsubtracao = document.querySelector("subtracao")
const btnMultiplicacao = document.querySelector("multiplicao")
const btnDivisao = document.querySelector("dividir")
const inputprimeiro = document.querySelector("#primeiroNumero") 
const inputsegundo = document.querySelector("#segundoNumero") 
const divres = document.querySelector(".res")

function somar(){
    let resultado = Number  (inputprimeiroNumero.value) + Number (inputprimeiroNumero.value) 
    divres.innerText = resultado
}
function subtracao(){
    let resultado = Number (inputprimeiroNumero.value) - Number (inputprimeiroNumero.value)
    divres.innerText = resultado
}
function multiplicacao() {
    let resultado = Number (inputprimeiroNumero.value) * Number(inputprimeiroNumero.value)
    divres.innerText = resultado
}
function dividir() {
    let resultado = Number(inputprimeiroNumero.value) / Number(inputprimeiroNumero.value)
    divres.innerText = resultado
}

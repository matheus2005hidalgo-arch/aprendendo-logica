/* somar  todos os
e dividir pelo número total de valores*/

let nota1= Number (prompt('Digite a primeira nota'))
let nota2= Number (prompt('Digite a segunda nota'))
let nota3= Number (prompt('Digite a terceira nota'))
let nota4= Number (prompt('Digite a quarta nota')) 

let soma = nota1 + nota2 + nota3 + nota4
let media = soma / 4


if (media >= 8 ){
   alert("voce foi aprovado") 
} else {
    alert("voce foi reprovado")
}

alert(`A media do aluno é ${media}`)

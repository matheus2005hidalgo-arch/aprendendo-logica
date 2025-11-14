/*              0        1         2     */

let filmes = [ "ironman", "Homem aramha", "mazerrunner", "the Batman"]

filmes[1]= "ben 10" //altera valor no indice 2

filmes.push("homem aranha 4") /*altera o final */
filmes.unshift("homem aranha 0") //add no inicio
filmes.pop("homem aranha 6") /* remove ultimo do array */
console.log(filmes)

/*console.log(filmes0)
console.log(filmes1)
console.log(filmes2)
console.log(filmes3)
console.log(filmes4)*/

for (const filmes of filmes){
    console.log(filmes)
}

/*(let i = 0; i < filmes.length; i++){
    console.log(filmes[i])
}*/


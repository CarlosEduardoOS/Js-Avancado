//ARGUMENTS

/* EXEMPLO SEM ARGUMENTS
const somaTresNumeros = (num1, num2, num3) => {
    return num1 + num2 + num3
}
console.log(somaTresNumeros(1,2,3))
*/

/* VERSAO 1
function somaNumerosInfinitamenteV1() { //arguments so funciona, quando é function padrao, ou seja, sem arrow function
    const args = Array.from(arguments)//Cria um objeto/array por meio de outro interavel, no caso os arguments
    let soma = 0
    for(let i = 0; i < args.length; i++) {
        soma += args[i] // += é mesma coisa de soma = soma + args[1]
    } //args.lenght = quantos numero tem dentro do array args
    return soma
}
console.log(somaNumerosInfinitamenteV1(1, 2, 3, 4, 5)) // os numero que a gente passa aqui ficam salvos no arguments, lembrando que sempre começa do indice 0
*/
// VERSAO 2
function multiplicaPeloPrimeiro() { 
    const args = Array.from(arguments)
    return args.reduce((acumulador, valorAtual) => acumulador += valorAtual)
    //o reduce ai no caso vai servir para reduzir o array args a um numero só somando todos os valor atual, indice por indice no acumulador
}
console.log(multiplicaPeloPrimeiro(1, 2, 3, 4, 5, 5, 5 , 5 )) 
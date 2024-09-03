//RECURSÃO PT1//

function somaRecursiva(n) { // o 5 entra aqui no 'n', quando ele entra e verifica ali, e por nao ser 1 ele passa do if, ai ele chega ali na rechamada com o valor que tinha, no caso 5, ele vai rechamar a função como n - 1, ou seja vai fazer a função denovo com o numero 4, e quando chegar ali na rechamada ele vai chamar n-1 e refazer a função e agora fazer a função com o numero 3 e por ai vai ate chegar no numero 1. Isso é uma funçaõ recursiva
    if (n === 1) {
        return 1
    } 
    return n + somaRecursiva(n-1)// isso daqui faz ele somar todos os resultados das recursões (5+4+3+2+1), como isso funciona sem alterar o valor de n? é tipo como a caixa de shulker do minecraft, quando voce chama a função nessa linha vc meio que cria uma outra dimensão em q n é 4, e dentro dela quando é feita a rechamada vai ser criada outra dimensão com n = 3 e por ai vai ate ser 1, depois disso tudo, ele vai voltando dimensão por dimensão desde o 1 ate o 2 ate o 3 ate o 4 ate a nossa que é o 5, e ai sim, somar isso tudo com o n inicial que é 5, entao na pratica ele ta fazendo 1+2+3+4+5. Espero que voce do futuro consiga entender
}

console.log(somaRecursiva(5))
//CURRYING//

// basicamente nesse exemplo é um comparador de se tal numero é maior que outro, usando currying, se o numero da esquerda for maior que o da direita, o resultado é true, se não, é false

let resultado 

function ehMaiorCurrying(a) {
    let result = false //declaração da variavel result, nome diferente so pra n dar conflito com o resultado ja declarado, o valor é false pq se chamar a função com apenas 1 parametro ele vai dar false, como um erro, mostrando que é preciso ter 2 valores para a função dar certo
    return function ehMaiorCurrying2(b) { // essa função serve para verifica o resultado final, ja que a ultima comparação de parametros é a que conta, quando não houver mais nada a ser comparado em seguida ele encerra a função
        if(!b) { // essse bloco if ta dizendo "se não tiver mais nada para comparar pode entregar o result"
            return result
        }
        result = a > b // aqui é onde ocorre a comparsção principal da função, e como queremos que 'a' sempre seja atualizado, vamos para a linha de baixo
        a = b // aqui é onde passamos o resultado de 'b' para 'a', pois na proxima chamada 'b' terá um novo valor
        return ehMaiorCurrying2
    }
}

resultado = ehMaiorCurrying(2)(5)(4)() //aqui ele vai passando todos os parametros como se fosse uma repetição, passando sempre um novo 'b'. Lembre-se que é sempre a ultima comparação que vai ser mostrada

console.log(resultado)

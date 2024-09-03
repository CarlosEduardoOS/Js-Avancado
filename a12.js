const umaPromessa = new Promise((resolve, reject) => {
    let soma = 1 + 1
    if (soma === 2 ) {
        resolve('Tudo certo')
    } else {
        reject('Deu Ruim')
    }
})

//essa promisse vai fazer essa soma e ir direto para o if, o resolve o reject funcionam como um return, soq com caracteristicas diferentes

console.log('esperando promise...')

umaPromessa.then((resultado) => {
    console.log(`Valor do then: ${resultado}`)
}).catch((erro) => {
    console.error(`Valor do catch: ${erro}`)
}).finally(() => {
    console.log(`Independente do resultado eu sempre estarei aqui`)
})

/* 
nessa segunda parte nos encadeamos os seguintes metodos:
.then: Aciona quando a promise é resolvida
.catch: Aciona quando a promise é rejeitada
.finally: Ele é sempre acionado, independente do resultado da promise
*/
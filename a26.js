//RECURSÃO PT2//

function timeout(data) {
    return new Promise(resolve => setTimeout(() => resolve(data), 1000 )) // quando essa promise for chamada vai ser passado essa funcção setTimeOut que vai ser executada no periodo de tempo la de 100 milisegundos
}

async function contagemNewYear(data) { // async serve para dizer que uma função é assincrona. Isso significa que ela pode executar operações que levam tempo para serem concluídas, como requisições a APIs, leitura de arquivos, ou qualquer outra tarefa que não seja instantânea. No caso o await do TimeOut
    if(data <= 0) {
        return console.log('FELIZ ANO NOVO!!!')
    }
    console.log(await timeout(data))
    return contagemNewYear(data-1)
}

contagemNewYear(15)
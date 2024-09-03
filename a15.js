//ASYNC / AWAIT
const cincoMil = () => new Promise ((resolve, reject) => {
    setTimeout (() => resolve('promise cincoMil resolvida'), 5000)
})
const mil = () => new Promise ((resolve, reject) => {
    setTimeout (() => resolve('promise mil resolvida'), 1000)
})
const quinhentos = () => new Promise ((resolve, reject) => {
    setTimeout (() => resolve('promise quinhentos resolvida'), 500)
})
const cem = () => new Promise ((resolve, reject) => {
    setTimeout (() => resolve('promise cem resolvida'), 100)
})

const resolvedoraDePromisesAssincronas = async () => { //ao dizer que essa função é async, voce diz que ela é uma função que tem algum tipo de codigo rodando dentro dela que é assincrono
    const resultado1 = await cincoMil() // o await tem a função de fazer com que o codigo espere a funçãi cincoMil terminar para prosseguir com o codigo
    console.log('codigo aqui 1')
    console.log('codigo aqui 2')
    console.log('codigo aqui 3')
    const resultado2 = await quinhentos()
    const resultado3 = await cem()
    const resultado4 = await mil()

    console.log(`Mensagens: \n${resultado1} \n${resultado2} \n${resultado3} \n${resultado4}`)
}// uma grande vantagem do asyn / await é que nos conseguimos trabalhar sem ter que ficar utilizando varios then ou catch

resolvedoraDePromisesAssincronas()
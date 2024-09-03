const statusPantera = 'triste'

//VERSÃO CALLBACK
/*function isPanteraFeliz(callback, errorCallback) {
    switch (statusPantera) {
        case 'feliz' :
            callback({
                mensagem: 'FELIZ'
            })
            break
        case 'triste' :
            errorCallback({
                mensagem: 'TRISTE'
            })
            break
        case 'entediado' :
            errorCallback({
                mensagem: 'ENTEDIADO'
            })
        break
        default: 
            errorCallback({
                mensagem: 'EMOCIONALMENTE INDEFINIDO'
            })
    }
}

isPanteraFeliz(
    (response) => console.log(`Tudo certo. O gato está ${response.mensagem}`),
    (error) => console.error(`Deu ruim... O gato está ${error.mensagem}`)
)*/

//VERSÃO PROMISE (sempre opte por promise para evitar uma coisa chamada de 'callback hell')
const isPanteraFeliz = new Promise((resolve, reject) => {
    switch (statusPantera) {
        case 'feliz' :
            resolve({
                mensagem: 'FELIZ'
            })
            break
        case 'triste' :
            reject({
                mensagem: 'TRISTE'
            })
            break
        case 'entediado' :
            reject({
                mensagem: 'ENTEDIADO'
            })
        break
        default: 
            reject({
                mensagem: 'EMOCIONALMENTE INDEFINIDO'
            })
    }
})

isPanteraFeliz.then((response) => { // da pra der varios then, so ficar colocando .then la, mesma coisa com o catch, entao s precisa ser criativo
    console.log(`Tudo certo. O gato está ${response.mensagem}`)
}).catch((error) => {
    console.error(`Deu ruim... O gato está ${error.mensagem}`)
})


const promise1 = new Promise ((resolve, reject) => {
    setTimeout (() => resolve('Promise 1 resolvida'), 1000) // em milisegundos
})

const promise2 = new Promise ((resolve, reject) => {
    setTimeout (() => resolve('Promise 2 resolvida'), 500)
})

const promise3 = new Promise ((resolve, reject) => {
    setTimeout (() => resolve('Promise 3 resolvida'), 100)
})

Promise.all([promise1, promise2, promise3]).then((messages) => { // imprime no console o retorno resolve das 3 promises anteriores
    console.log(messages)
})

Promise.race([promise1, promise2, promise3]).then((message) => { // imprime no console o retorno resolve da primeira promise a ser resolvida, no caso a 1
    console.log(message)
})
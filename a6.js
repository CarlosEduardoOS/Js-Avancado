//copia e cola isso dai no console do DevTools

const saudacao = (nome) => alert('Olá ' + nome)

const processaEntradaUsuario = (callback) => {
    const nome = prompt('Digite seu nome:')
    callback(nome)
}

processaEntradaUsuario(saudacao);

//------------------------------------------------------

const callback = e => alert('Aconteceu um evento ' + e.type)
window.addEventListener('click', callback)

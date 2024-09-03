///CLOSURES//

/*
function init() {
    const nome = 'Uma String'
    function mostrarNome() { // essa function consegue acessar o escopo acima dela
        console.log(nome)
    }
    mostrarNome()
}

init()
*/
//-----------------------------------------------------------------------------------------------------------------
/* 
function init() {
    const nome = 'Uma String'
    function mostrarNome() { // essa function consegue acessar o escopo acima dela
        console.log(nome) // A função de dentro consegue acessar o valor da função de fora mesmo depois que essa função seja executada
    }
    return mostrarNome
}

const minhaFuncao = init()
minhaFuncao()
*/
//--------------------------------------------------------------------------------------------------------------------

function criarContadora() {
    let contador = 0

    return function() { // aqui temos o inicio de uma closure
        console.log(contador)
        contador++
    } // e aqui é o respectivo final
}

const contadora = criarContadora() // aqui c ta meio que mudando o nome sla, mas é uq faz sentido
contadora()
contadora()
contadora()
contadora()


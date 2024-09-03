const funcao1 = () => {
    console.log('Eu sou a função 1')
    const valor = true
    try {
        if(valor) {
            throw new Error('Deu error no valor')
        }
    } catch (error) {
        console.error(error)
        throw error
    } 
}

const funcao2 = () => {
    console.log('Eu sou a função 2')

    asdf = 90
}

const main = () => {
    try {
        funcao1()
        funcao2()
    } catch (error) {
        console.error(error)
        console.log('passou por aqui')
    }

}

main()
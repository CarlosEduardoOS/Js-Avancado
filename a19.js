//Try & Catch Aninhado (bagulho totalmente inutil, pq é feio e ninguem acha bom de ler essa merda, mas o raoni falo que é bom saber)



const main = () => {
    try {
        try {
            try {
                try {
                    throw new Error('Deu error na funcao3')
                } catch (error) {
                    console.error(error)
                    throw error
                }
            } catch (error) {
                console.error(error)
                throw error
            }
        } catch (error) {
            console.error(error)
            throw error
        }
    } catch (error) {
        console.error(error)
    }
    console.log('passou por aqui')
}

main()
// TRY / CATCH

const main = () => {
    try {
        codigo //= 90
    } catch (error) {
        console.log(`Deu erro no código e o erro é esse: \n\n${error}`)
    } finally {
        console.info('esse valor sempre será mostrado')
    }
    
}

main()
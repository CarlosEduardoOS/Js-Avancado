const animal = {
    som: 'um som de animal',
    tipo: 'animal',
    emitirSom: function() {
        console.log(this.som + this.som)
    }
}

const gato = {
    som: 'miau',
    tipo: 'gato'
}

Object.setPrototypeOf(gato, animal) //Aqui voce está dizendo que o Prototype do gato, ou seja, o objeto pai do objeto gato é animal
gato.emitirSom() //gato não tem a funçao som, entao por gato ser filho de animal, ele vai, depois que ele viu que não possui essa função em gato, procurar no objeto animal, agora na função, o this.som, como voce ta chamando o gato antes do . nessa mesma linha aqui,vai voltar para o objeto gato, e se não encontrar vai procurar no objeto pai, no caso o objeto animal.

const gatoRaivoso = {
    tipo: 'gatoRaivoso',
    miarForte: function() {
        console.log(this.som.toUpperCase())
    }
}

Object.setPrototypeOf(gatoRaivoso, gato)
gatoRaivoso.miarForte()

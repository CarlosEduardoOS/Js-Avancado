const obj = {
    listaString: ['Inscreva-se', 'Ative o sino', 'Brazilian Dev'],
    get primeiraString() {
        return this.listaString.length ? this.listaString[0] : null // esse ? é tipo um if else de uma linha, ele ta falando tipo, se a largura da listaString for 1 pra cima vc manda a largura, se não vc manda null
    },
    set primeiraString(item) {
        this.listaString.unshift(item) // método unshift em JavaScript é usado em arrays para adicionar um ou mais elementos ao início do array. Quando você usa unshift, os elementos que já estavam no array são deslocados para a direita para dar espaço ao(s) novo(s) elemento(s).
    },
}

console.log(obj.primeiraString)
obj.primeiraString = 'Deixa um like'
console.log(obj.primeiraString)
console.log(obj.listaString)
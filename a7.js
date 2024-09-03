class Dev {
    constructor(nome, idade, principalLinguagem) {
        this.nome = nome
        this.idade = idade
        this.principalLinguagem = principalLinguagem
    }
}

class FrontendDev extends Dev { //classe filha da classe pai 'Dev'
    constructor(nome, idade, principalLinguagem, framework) {
        super()
        this.nome = nome
        this.idade = idade
        this.principalLinguagem = principalLinguagem
        this.framework = framework
    }

    saudacao() {
        console.log(`Oi! Sou dev Frontend, trabalho com ${this.principalLinguagem}, e me chamo ${this.nome} \n\n`)
    }
}

class BackendDev extends Dev { //classe filha da classe pai 'Dev'
    constructor(nome, idade, principalLinguagem, bancoDeDados) {
        super()
        this.nome = nome
        this.idade = idade
        this.principalLinguagem = principalLinguagem
        this.bancoDeDados = bancoDeDados
    }

    saudacao() {
        console.log(`Oi! Sou dev Backend, trabalho com ${this.principalLinguagem}, e me chamo ${this.nome} \n\n`)
    }
}

const frontend1 = new FrontendDev('Pedro', 35, 'Javascript', 'React')
const backend1 = new BackendDev('João', 42, 'C#', 'SQL Server')

console.log(frontend1)
frontend1.saudacao()

console.log(backend1)
backend1.saudacao()
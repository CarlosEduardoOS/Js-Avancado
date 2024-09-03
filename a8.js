//continuação com algumas alterações e otimizações do a7.js
//aqui nós evitamos o uso exagerado de linhas, passando parametros para a classe pai, que seriam redundantes se escrevessemos novamente, compare com o a7.js


class Dev {
    constructor(nome, idade, principalLinguagem, tipoDeDev) {
        this.nome = nome
        this.idade = idade
        this.principalLinguagem = principalLinguagem
        this.tipoDeDev = tipoDeDev
    }

    saudacao() {
        console.log(`Oi! Sou dev ${this.tipoDeDev}, trabalho com ${this.principalLinguagem}, me chamo ${this.nome} e tenho ${this.idade} anos \n\n`)
    }
}

class FrontendDev extends Dev { //classe filha da classe pai 'Dev'
    constructor(nome, idade, principalLinguagem, tipoDeDev, framework) {
        super(nome, idade, principalLinguagem, tipoDeDev)
        this.framework = framework
    }
}

class BackendDev extends Dev { //classe filha da classe pai 'Dev'
    constructor(nome, idade, principalLinguagem, tipoDeDev, bancoDeDados) {
        super(nome, idade, principalLinguagem, tipoDeDev)
        this.bancoDeDados = bancoDeDados
    }
}

const dev1 = new FrontendDev('Pedro', 35, 'Javascript', 'Frontend', 'React')
const dev2 = new BackendDev('João', 42, 'C#', 'Backend', 'SQL Server')
const dev3 = new FrontendDev('Beatriz', 31, 'TypeScript', 'Frontend', 'Angular');
const dev4 = new BackendDev('Lucas', 29, 'Java', 'Backend', 'MySQL');
const dev5 = new FrontendDev('Fernanda', 25, 'JavaScript', 'Frontend', 'Svelte');
const dev6 = new BackendDev('Rafael', 33, 'Ruby', 'Backend', 'MongoDB');
const dev7 = new FrontendDev('Mariana', 26, 'JavaScript', 'Frontend', 'Next.js');
const dev8 = new BackendDev('Vinicius', 40, 'PHP', 'Backend', 'SQLite');
const dev9 = new FrontendDev('Giovana', 34, 'JavaScript', 'Frontend', 'Gatsby');
const dev10 = new BackendDev('Henrique', 45, 'Node.js', 'Backend', 'DynamoDB');

//gerei do 3 ao 10 no GPT 
console.log(dev6)
dev4.saudacao()
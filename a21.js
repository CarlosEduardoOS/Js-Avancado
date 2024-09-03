// REST PARAMETERS

function multiplicaPeloPrimeiro(multiplicador, ...args) { //\Cria um parametro que coleta todos os parametros passados e passa pra dentro de um array
    return args.map((num) => {return multiplicador * num}) // map é uma forma de fazer um loop no array trabalhando cada elemento
}

console.log(multiplicaPeloPrimeiro(2, 15, 12, 10, 4,)) // multiplicador recebe 2, pq ele é o primeiro parametro, e o multiplicador esta na primeira posição ali em cima, e o resto vai pros args, começando do indice 0 sempre 
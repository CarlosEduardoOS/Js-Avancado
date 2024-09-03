const listaDeEstados = ["RJ", "SP", "MG"]

for(let estado of listaDeEstados) {
    console.log(estado + " é um estado brasileiro")
}
//basicamente o que acontece é que tem o array listaDeEstados e ele tem os treco dele la dentro ne? depois a gente cria uma variavel estado so pra ela existir ali, depois no for a gente vai dizer que cada treco do array vai ser atribuido à variavel estado ja existente, na repetição respectiva. Na primeira rep vai ser o primeiro item do array, na segunda rep vai ser o segundo item e por assim vai, o problema é que nesse exemplo ai apos o for a variavel estado ficara atribuida como o ultimo item do array. 
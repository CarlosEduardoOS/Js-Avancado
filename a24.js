//DEFAULT PARAMETERS//

/*
function multiplicar(a=1,b=1) { // Sempre que essa função for chamada e não houver nenhum parametro 'a' a gente vai dizer que esse 'a' vai ser 1, mesma coisa para 'b'
    return a*b
}

console.log(multiplicar(undefined, 6)) // tenta colocar o undefined na posição do A ou do B pra vc vez que ele vai ser substituido por 1 la em cima 
*/
//------------------------------------------------------------------------------------------------------
/* 
function test(num = 1) {
    console.log(typeof num)
}

test()
test(undefined) // sempre q for undefined ele vai dar lugar para o default parameter que voce preprogramou ali em cima
*/
//--------------------------------------------------------------------------------------------------------
/*
function test1( coisa = test2()) {
    return coisa
}

function test2() {
    return 'aaaaaa' // como deu pra ver da pra usar uma function como default parameter tambem
}

console.log(test1())
*/
//--------------------------------------------------------------------------------------------------------

function somaArraysObjectos([x,y] = [1,2], {z:z} = {z:3}) { // esse é um exemplo de destruturação, no caso o array [1,2] esta sendo desestruturado para x e y
    return x + y + z
}

console.log(somaArraysObjectos())
console.log(somaArraysObjectos([3, 4], {z: 3}))

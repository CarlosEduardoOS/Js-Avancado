// DESTRUCTURING
/*
const foo = ['um', 'dois', 'três']

const [str1, str2, str3] = foo // ta vendo que inves dos parametros virarem elementos do array, os elementos do array que viraram parametros?

console.log(str1)
console.log(str2)
console.log(str3)
*/
//--------------------------------------------------------------------------------
/*
let a, b, c 

[a, ,c] = [1, 2, 3, 4] // pega os 2 primeiros // se deixa esse espaço ai em branco ele pula 1 indice

console.log(a)
console.log(b)
console.log(c)
*/
//-----------------------------------------------------------------------------------
/* 
let a, b

[a=5, b=7] = [1] // desse jeito da pra setar um valor default pra variavel, pra caso ela não seja reconstruida ela não fique como undefined
console.log(a)
console.log(b)
*/
//---------------------------------------------------------------------------------------
/* 
const o = {p: 42, q: true}
const {p:foo, q: bar} = o

console.log(foo, bar) // isso dai meio q mudo a tagzinha sabe, p renomeou pra foo, e q pra bar
*/
//------------------------------------------------------------------------------------
/* 
const metadata = {
    title: 'Scratchpad',
    translations: [
        {
            locale: 'de',
            localization_tags: [ ],
            last_edit:'2014-04-14T08:43:37',
            url: '/de/docs/Tools/Scratchpad',
            title: 'JavaScript-Umgebung'
        }
    ],
    url: '/en-US/docs/Tools/Scratchpad'
}

const { title: englishTitle, translations: [{title: localeTitle}] } = metadata // aqui a gente destruturou pra mudar o nome ali em cima para n ter 2 title

console.log(englishTitle)
console.log(localeTitle)
*/
//-------------------------------------------------------------------------------
function userId({id}) { // pega uq tiver dentro da tag id do user
    return id; // deve ser a mesma tagzinha q ta ali em cima
}

function whois ({displayName: displayName, fullName: {firstName: name}}) {
    console.log(displayName + ' is ' + name)
}

const user = {
    id: 42,
    displayName: 'Jdoe',
    fullName: {
        firstName: 'John',
        lastName: 'Doe'
    }
}

console.log('userId:' + userId(user))
whois(user)
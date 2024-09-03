//OBJETOS IMUTÁVEIS//
 const object1 = {}
object1.a = 1234
//Object.preventExtensions(object1) // previne de adiconar mais tagzinhas, OBS: o nome tecnico das tagzinhas, é propriedade, entao nerdes falam propriedade, homens legais e descolados falam tagzinhas :)
//Object.freeze(object1) // congela totalmente o obejto, voce não pode colocar mais propriedades, nem apagar, nem reatribuir nem nada, ele agora esta completamente imutavel
Object.seal(object1) // ele deixa voce fazer reatribuições dentro do objeto, nada mais
object1.b = 4321// usei isso quando fui testar o preventExtension
object1.a = 12 // usei isso quando fui testar o seal
delete object1.a // usei isso quando fui testar o freeze
console.log(object1)
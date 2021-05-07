// let souUmDado = function() {
//     console.log(`sou um dado`)
// };

function falaOi(){
    console.log(`oi`)
}
falaOi()

let souUmDado = function(){
    console.log(`sou um dado`)
}
souUmDado()

function ExecutaUmaFUncao(funcao){
    console.log(`vou ecevujtar sua função baixo`)
    funcao()
}
ExecutaUmaFUncao(souUmDado)
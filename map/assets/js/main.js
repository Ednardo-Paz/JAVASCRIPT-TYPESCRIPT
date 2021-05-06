
// função Map

//           0   1   2  3  4 ...
//  let numeros = [5, 50, 80, 1, 2 , 3 , 5, 8 , 7 ,200 , 15 , 22, 27 ];
//  let numerosEmDobro = numeros.map( function(valor){
//      return valor * 2
//  })
// console.log(numerosEmDobro)
// let numerosFiltrados = numeros.filter(valor => valor > 10 ) 

// console.log(numerosFiltrados)

// 
// Retorna apensa uma string com o nome da pessoa.
// Remova apenas a chave nome do objeto.
// Adicione uma cheve ID em cada objeto.

let pessoas = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Ednardo`, idade: 37 },
    { nome: `Eduardo`, idade: 22 }, { nome: `Gina`, idade: 55 },
    { nome: `Sara`, idade: 34 },
    { nome: `Walace`, idade: 67 },

 ];

let NomeEmString = pessoas.map(obj => obj.nome.toString())
console.log(NomeEmString, typeof NomeEmString)

let idade = pessoas.map(function(obj){
   return { idade: obj.idade}
})
console.log(idade)
let addChave = pessoas.map(function(obj, indice){
    let newObj = {...obj};
    obj.id  =  indice 
    return obj

})
let chave = pessoas.map(function(obj, indice){
    newObj = {...obj}
    obj.chave = indice * 1000
})
console.log(pessoas)
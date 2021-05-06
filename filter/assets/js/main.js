
//           0   1   2  3  4 ...
// let numeros = [5, 50, 80, 1, 2 , 3 , 5, 8 , 7 ,200 , 15 , 22, 27 ];

// let numerosFiltrados = numeros.filter(valor => valor > 10 ) 

// console.log(numerosFiltrados)

// retorne o nome das pessoias que tem 5 letras ou mais.
// Retorne as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a.

let pessoas = [
    { nome: `Luiz`, idade: 62 },
    { nome: `Ednardo`, idade: 37 },
    { nome: `Eduardo`, idade: 22 },
    { nome: `Gina`, idade: 55 },
    { nome: `Sara`, idade: 34 },
    { nome: `Walace`, idade: 67 },

];

let pessoasComNOmeGrande = pessoas.filter(obj => obj.nome.length > 5)
console.log(pessoasComNOmeGrande)
let pessoasComMaisDe50 = pessoas.filter(obj => obj.idade >= 50)
console.log(pessoasComMaisDe50)
let pessoasNomeTerminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith(`a`))
console.log(pessoasNomeTerminaComA)
    


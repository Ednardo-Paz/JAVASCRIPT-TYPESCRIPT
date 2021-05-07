
//           0   1   2  3  4 ...
 let numeros = [5, 50, 80, 1, 2 , 3 , 5, 8 , 7 ,200 , 15 , 22, 27 ];

//Retorna a soma do dobro de todos os pares.
//filtrar pares
//dobrar valores
//reduzir( somar tudo)
let = numerosPares = numeros.filter(function(valor){
    if(valor % 2 === 0) return valor
}).map(function(valor){
    return valor * 2;
}).reduce(function(acumulador, valor){
    return acumulador += valor;
})
console.log(numerosPares)
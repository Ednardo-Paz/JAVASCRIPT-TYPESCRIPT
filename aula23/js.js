
 //           -5       -4      -3      -2       -1 
 //            0       1      2        3         4 
let nomes = [`Ed`, `maria`, `edu`,`Sabrina`, `Marisa`];
let novo = nomes

// simula pop = remove o ultimo array
//let removidos = nomes.splice(-1, 1)

//simula shift = remove o primeiro array
//let removidos = nomes.splice(0, 1)

// simula push = adiciona no ULTIMO array
//nomes.splice(nomes.length, 1, `Ednardo` )

//simula Unshift

//nomes.splice(índice atual, delete, elemento1 , elem2, elem)
nomes.splice(0, 0, `Ednardo` )
console.log(nomes)



// function Produto(nome, preco, estoque) {
//   this.nome = nome;
//   this.preco = preco;

//   Object.defineProperty(this, `estoque`, {
//     enumerable: true, // mostra a chave
//     value: estoque, // valor
//     writable: false, //pode ou não o valor
//     configurable: true, // configurável
//   });

//   Object.defineProperties(this, {
//     nome: {
//       enumerable: true, // mostra a chave
//       value: nome, // valor
//       writable: false, //pode ou não o valor
//       configurable: true, // configurável
//     },
//     preco: {
//       enumerable: true, // mostra a chave
//       value: preco, // valor
//       writable: false, //pode ou não o valor
//       configurable: true, // configurável
//     },
//   });
// }
// let p1 = new Produto(`camisa`, 33, 3);
// p1.estoque = 500000;
// console.log(p1);
// for (let chave in p1) {
//   console.log(chave);
// }

//============getters, setters=============

function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  Object.defineProperty(this, `estoque`, {
    enumerable: true, // mostra a chave
    //value: estoque, // valor
    //writable: false, //pode ou não o valor
    configurable: true, // configurável
    get: function(){
      return estoque
    },
    set: function(valor){
        (valor)
    }
  });
}
let p1 = new Produto(`camisa`, 33, 3);
p1.estoque = 50000
console.log(p1);
console.log(p1.estoque)
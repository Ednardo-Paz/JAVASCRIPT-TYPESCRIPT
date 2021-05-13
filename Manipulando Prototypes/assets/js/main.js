// const objA = {
//     chaveA: `A`
// }
// const objB = {
//     chaveB: `B`
// }
// const objC = new Object();
// objC.chaveC = `C`;

// Object.setPrototypeOf(objB, objA);
// Object.setPrototypeOf(objC, objB);
// console.log(objC)

function Produto(nome, preco ){
    this.nome = nome;
    this.preco = preco;
}
Produto.prototype.desconto = function(percentual){
 this.preco = this.preco - (this.preco * (percentual / 100));
};

Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100));
   };

   const p2 = {
       nome: `caneca`,
       preco:20
   }
Object.setPrototypeOf(p2, Produto.prototype)
const p1 = new Produto(`camisa`, 50);
p1.desconto(50)
console.log(p1)
p2.desconto(50)
console.log(p2)

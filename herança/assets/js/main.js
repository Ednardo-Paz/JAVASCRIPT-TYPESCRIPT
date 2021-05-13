function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco);
    this.cor = cor;
}
Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta

Camiseta.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * percentual / 100);
}

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    

    Object.defineProperty(this, `estoque`, {
        enumerable: true,
        configurable: true,
       get: function() {
           return estoque;
       }, 
       set: function(){
           if(typeof valor !== `number`) return;
           estoque = valor;
       }
    });

}
Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;


const caneca = new Caneca(`Canequinha`, 5, `plástico`, 10);

const produto = new Produto(`Gen`, 111);
const camiseta = new Camiseta(`camiseta`, 30, `preta`);
caneca.estoque = 55
camiseta.aumento(50);
console.log(produto);
console.log(camiseta);
caneca.aumento(5)
console.log(caneca.estoque)

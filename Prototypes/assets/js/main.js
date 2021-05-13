
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    Pessoa.prototype.nomeCompleto = function(){
        return `${this.nome} ${this.sobrenome}`
    }
};
const pessoa1 = new Pessoa(`Ednardo`, `Sousa`);
console.log(pessoa1)
const pessoa2 = new Pessoa(`Gina`, `sobral`)
console.log(pessoa2.nomeCompleto())

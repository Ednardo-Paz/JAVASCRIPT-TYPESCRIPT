function criaPessoa(nome, sobrenome) {
    return {
        nome: nome,
       sobrenome: sobrenome,
        nomeCompleto(){
            return nome, sobrenome
        }
   }
}
let p1 = criaPessoa(`Ed`, `paz`)
console.log(p1.nomeCompleto())



// function criaPessoa(nome, sobrenome){
//     const pessoaPrototype  = {
//         falar(){
//             console.log(`${this.nome} está falando.`)
//         },
//         comer(){
//             console.log(`${this.nome} está comendo.`)
//         },
//         beber(){
//             console.log(`${this.nome} está bebendo.`)
//         }
//     }
    
//     return Object.create(pessoaPrototype, {
//         nome:{value: nome},
//         sobrenome:{value: sobrenome},
    
//     });  
// }

const falar = {
    falar(){
        console.log(`${this.nome} está falando.`)
    },
} ;
const beber = {
    falar(){
        console.log(`${this.nome} está bebendo.`)
    },
} ;
const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`)
    },
} ;

const pessoaPrototype  = {...falar, ...comer,...beber}
function criaPessoa(nome, sobrenome){
    return Object.create(pessoaPrototype, {
        nome:{value: nome},
        sobrenome:{value: sobrenome},
    
    });  
}


const p1 = criaPessoa(`Ednardo`, `Paz`);
const p2 = criaPessoa(`Maria`, `Oliveira`);



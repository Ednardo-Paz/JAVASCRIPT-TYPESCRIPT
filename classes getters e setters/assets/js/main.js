
// const _velocidade = Symbol(`velocidade`);
// class Carro {
//     constructor(nome){
//         this.nome = nome;
//         this[_velocidade] = 0;
//     }

//     set velocidade(valor) {
//         if(typeof valor === `number`) return;
//         if(valor >= 100 ||valor <=0) return;
//         this[_velocidade] = valor;
//     }


//     acelerar() {
//         if(this[_velocidade] >= 100) return;
//         this[_velocidade]++;
    
//     }
//     get velocidade() {
//         return this[_velocidade];
//     }

//     freiar() {
//         if(this[_velocidade] <= 0) return;
//         this[_velocidade]--;
//     }

// }

// const c1 = new Carro(`Fusca`);

// // for(let i = 0; i <=200; i++) {
// //     c1.acelerar()
// // }

// c1.velocidade = 99
// console.log(c1)

// class DispositivoEletronico {
//     constructor(nome){
//         this.nome = nome;
//         this.ligado = false;
//     }
     
//     ligar(){
//         if(this.ligado){
//             console.log(this.nome + `dispositivo ligado`);
//             return;
//         }
//         this.ligado = true
//     }

//     desligar(){
//         if(!this.ligado){
//             console.log(this.nome +` ` + ` dispositivo já desligado`);
//             return;
//         }
//         this.ligado = false

//     }
// }

// const d1 = new DispositivoEletronico(`smartphone`)

// class Smartphone extends DispositivoEletronico {
//     constructor(nome, cor, modelo){
//         super(nome)
//         this.cor = cor;
//         this.modelo = modelo
//     }
    
// }

// const s1 = new Smartphone(`iPhone`, `preto`, `iphone11`);
// s1.ligar();
// console.log(s1)

class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }

    diminuirVolume(){
        this.volume -= 2;
    }
}

const c1 = new ControleRemoto(`lg`);
c1.aumentarVolume()
c1.aumentarVolume()
c1.diminuirVolume()
console.log(c1)
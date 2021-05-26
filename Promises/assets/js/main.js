// function rand(min, max) {
//   min *= 1000;
//   max *= 1000;
//   return Math.floor(Math.random() * (max - min) + min);
// }

// function esperaAi(msg, tempo) {


//  return new Promise ((resolve, reject) => {
//    if(typeof msg !== `string`) reject(false)
//    setTimeout(() => {
//     resolve(msg)
//   }, tempo)
//  })
// };

// esperaAi(`conexão com o BD`, rand(1,3))
// .then((Resposta) => {
//   console.log(Resposta);
//   return esperaAi(`Buscando dados da BASE`, rand(1, 3));
// })
// .then((resposta) => {
//   console.log(resposta);
//   return esperaAi(`Tratando os dados ca BASE`)
// })
// .then((resposta) => {
//   console.log(resposta)
// })
// .then(() => {
//   console.log(`Exibe dados na tela.`)
// }) 

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {


 return new Promise ((resolve, reject) => {
   if(typeof msg !== `string`){
      reject(`CAI NO ERRO`)
      return
    };
   setTimeout(() => {
    resolve(msg.toUpperCase() + ` - passei na promise`) 
  }, tempo)
 })
};

async function executa(){

  try{
    const fase1 = await esperaAi(`Fase 1`, rand(1, 5));
    console.log(fase1)  
    const fase2 = await esperaAi(200, rand(1, 5));
    console.log(fase2) 
    const fase3 = await esperaAi(`Fase 3`, rand(1, 5));
    console.log(fase3) 
  } catch(e) {
    console.log(e)
  }

    
}
executa();

// const Promises = [ 
//   `primeiro valor`,
//   esperaAi(`Promise 1`, 3000),
//   esperaAi(`Promise 2`, 500),
//   esperaAi(`Promise 3`, 1000),
//   esperaAi(1000, 1000),
//   `outro valor`
// ];

// Promise.all(Promises)
// .then(function(valor){
//   console.log(valor)
// })
// .catch(function (erro) {
//   console.log(erro);
// })
// ---------------------------promise.race---------------------------

// const Promises = [ 
  
//   esperaAi(`Promise 1`, rand(1, 5)),
//   esperaAi(`Promise 2`, rand(1, 5)),
//   esperaAi(`Promise 3`, rand(1, 5)),
//   // esperaAi(1000, 1000),
  
// ];

// Promise.race(Promises)
// .then(function(valor){
//   console.log(valor)
// })
// .catch(function (erro) {
//   console.log(erro);
// })
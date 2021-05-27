// const promessa = new Promise((resolve, reject) => {
//   let condicao = false;
//   if (condicao) {
//       setTimeout(() => {
//           resolve({nome: `Ednardo`, idade: 37});
//       },2000)
//   } else {
//     reject(Error(`um erro ocorreu na promise.`));
//   }
// });

// const retorno = promessa
// .then(resolucao => {
//     console.log(resolucao);
//     resolucao.profissao = `Desenvolvedor`
//     return resolucao
// })
// .then(resolucao => {
//     console.log(resolucao)
// })
// .catch(rejeitada => {
//     console.log(rejeitada)
// })
// .finally(() => {
//     console.log(`Acabou`)
// })
// console.log(retorno) 

const login = new Promise (resolve => {
    setTimeout(() => {
        console.log(`Usuário logado.`)
    }, 1000)
})


const dados = new Promise (resolve => {
    setTimeout(() => {
        console.log(`Dados carregados.`)
    }, 1500)
})

const carregoTudo = Promise.all([login, dados])

carregoTudo.then(resolucao => {
    console.log(resolucao);
})
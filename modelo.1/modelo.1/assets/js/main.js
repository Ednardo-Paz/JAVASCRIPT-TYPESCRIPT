let inputTarefa = document.querySelector(`.input-tarefa`);
let btnTarefa = document.querySelector(`.btn-tarefa`);
let tarefas = document.querySelector(`.tarefa`);


// //3- Retornar Li
function criarLi() {
  let li = document.createElement(`li`);
  return li;
}
//4- Evento para add tarefa com o enter.
inputTarefa.addEventListener(`keypress`, function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa) return
    criarTarefa(inputTarefa.value);
  }
})

//-5 função limpa input
function limpaIMput() {
  inputTarefa.value = ``;
  inputTarefa.focus();

}
//-6 criar botão apagar em uma LI e add 
function btnApagar(li) {
  li.innerText += ` `;
  let btnApagar = document.createElement(`button`);
  btnApagar.innerText = `Apagar`
  li.appendChild(btnApagar)
  btnApagar.setAttribute(`class`, `apagar`)
}
//2 - Pegar o valor do input e criar Li.
function criarTarefa(textoInput) {
  let li = criarLi();
  li.innerHTML = textoInput
  tarefas.appendChild(li);
  limpaIMput();
  btnApagar(li)
  salvarTarefa();
}
// //7 criar evento para o btn-apagar
document.addEventListener(`click`, function (e) {
  let el = e.target
  if (el.classList.contains(`apagar`)) {
    el.parentElement.remove();
    salvarTarefa();
  }
})
// //8- Salvar tarefas a li com array das tarefas e modificando o texto para a pagart o texto 
function salvarTarefa() {
  let liTarefas = tarefas.querySelectorAll(`li`);
  let listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace(`Apagar`, ` `).trim();
    listaDeTarefas.push(tarefaTexto)
  }

  let tarefaJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem(`tarefas`, tarefaJson); 
}

//9- add tarefas salvas trazendo de volta para arrays.

 function addTarefasSalvas(){
  let tarefas = localStorage.getItem(`tarefas`);
  let listaDeTarefas = JSON.parse(tarefas)
  console.log(listaDeTarefas)

  for(let tarefa of listaDeTarefas){
     criarTarefa(tarefa)
    
   }
}
addTarefasSalvas();


 //1- Criar evento click e não validar se náo tiver valor. Function criar tarefa.
btnTarefa.addEventListener(`click`, function (e) {
  if (!inputTarefa) return
  criarTarefa(inputTarefa.value);
})




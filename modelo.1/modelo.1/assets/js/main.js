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
    criarTarefa(inputTarefa.value)
  }
})


//-5 função limpa input
function limpaTarefa() {
  inputTarefa.value = ` `;
  inputTarefa.focus();
}

//-6 criar botão apagar em uma LI e add 
function btnApagar(li) {
  li.innerHTML += ` `;
  let btnApagar = document.createElement(`button`);
  btnApagar.innerHTML = `Apagar`;
  li.appendChild(btnApagar);
  btnApagar.setAttribute(`class`, `apagar`);
  btnApagar.setAttribute(`title`, `Tarefa concluida.`)

}

//2 - Pegar o valor do input e criar Li. 
function criarTarefa(textoInput) {
  let li = criarLi();
  li.innerHTML = textoInput
  tarefas.appendChild(li)
  limpaTarefa()
  btnApagar(li)
  SalvarTarefa()
}


// //7 criar evento para o btn-apagar
document.addEventListener(`click`, function (e) {
  let el = e.target
  if (el.classList.contains(`apagar`)) {
    el.parentElement.remove()
    SalvarTarefa()
  }

})

// //8- Salvar tarefas a li com array das tarefas e modificando o texto para a pagart o texto 
function SalvarTarefa() {
  let liTarefa = tarefas.querySelectorAll(`li`)
  let listaDeTarefas = [];

  for (let tarefa of liTarefa) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace(`Apagar`, ` `);
    listaDeTarefas.push(tarefaTexto)

    let tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem(`tarefas`, tarefaJSON);
   
  }
}

//9- add tarefas salvas trazendo de volta para arrays.
function adicionaTarefasSalvas(){
  let tarefas = localStorage.getItem(`tarefas`);
  let listaDeTarefas = JSON.parse(tarefas)
  
  for(let tarefa of listaDeTarefas){
    criarTarefa(tarefa)
  }
}

adicionaTarefasSalvas()

//1- Criar evento click e não validar se náo tiver valor. Function criar tarefa.
btnTarefa.addEventListener(`click`, function (e) {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value)
})

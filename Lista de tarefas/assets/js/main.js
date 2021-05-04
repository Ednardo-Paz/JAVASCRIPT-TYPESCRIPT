let inputTarefa = document.querySelector(`.inputTarefa`)
let btnTArefa = document.querySelector(`.btn-tarefa`)
let tarefas = document.querySelector(`.tarefas`)


//9 - Trazer o Array de volta 
function addTarefasSalvas(){

  let tarefas = localStorage.getItem(`tarefas`)
  let listaDeTarefas = JSON.parse(tarefas);
 
  console.log(listaDeTarefas)

  for(tarefa of listaDeTarefas){
    criarTarefa(tarefa )

  } 
}
addTarefasSalvas()


//8 -Salvar as tarefas.
function salvarTarefas() {
  liTarefas = tarefas.querySelectorAll(`li`);
  listaDeTarefas = [];
  
  for(let tarefa of liTarefas){
   let tarefaTexto = tarefa.innerText
   tarefaTexto = tarefaTexto.replace(`Apagar`, ` `);
   listaDeTarefas.push(tarefaTexto)
   
  }
  let tarefaJson = JSON.stringify(listaDeTarefas);
  localStorage.setItem(`tarefas`, tarefaJson);
}

//7 - Criar evento apagar.
document.addEventListener(`click`, function (e) {
  let el = e.target
  if (el.classList.contains(`apagar`)) {
    el.parentElement.remove();
    salvarTarefas()
  }
})

//6 Criar o botão de apagar
function btnApagar(li) {
  li.innerText += ` `;
  let btnApagar = document.createElement(`button`);
  btnApagar.innerText = `Apagar`
  li.appendChild(btnApagar);
  btnApagar.setAttribute(`class`, `apagar`);
  btnApagar.setAttribute(`title`, `Apague`);

}
//5 - Limpar input
function limparInput() {
  inputTarefa.value = ``;
  inputTarefa.focus();
}
//4 - Add tarefas com o enter
inputTarefa.addEventListener(`keypress`, function (e) {
  if (e.keyCode === 13) {
    if (!inputTarefa.value) return;
    criarTarefa(inputTarefa.value)
  }
})
//3 - Retornar li
function criaLi() {
  let li = document.createElement(`li`);
  return li;
}


//2 - função para pegar o texto do input e add na lista.
function criarTarefa(inputtexto) {
  let li = criaLi();
  li.innerText = inputtexto;
  tarefas.appendChild(li);
  limparInput();
  btnApagar(li);
  salvarTarefas();

}

//1 - Criar evento btn
btnTArefa.addEventListener(`click`, function () {
  if (!inputTarefa.value) return;
  criarTarefa(inputTarefa.value)
})
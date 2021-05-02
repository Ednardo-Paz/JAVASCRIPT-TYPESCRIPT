const elementos = [
  {tag:`p`, texto: `qualquer texto`},
  {tag:`div`, texto: `qualquer texto 1`},
  {tag:`footer`, texto: `qualquer texto 2`},
  {tag:`section`, texto: `qualquer texto 3`},
]; 

let container = document.querySelector(`.container`);

let div = document.createElement(`div`);


for(let i = 0; i < elementos.length; i++){
let{tag, texto} = elementos[i]
let criarTag = document.createElement(tag)
criarTag.innerHTML = texto
div.appendChild(criarTag)
console.log(criarTag)
}
container.appendChild(div)


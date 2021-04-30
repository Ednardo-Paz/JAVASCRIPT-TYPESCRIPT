const paragrafos = document.querySelector(`.paragrafos`);
const Ps = paragrafos.querySelectorAll(`p`) 

const estilosBody = getComputedStyle(document.body);
const backgroundColorBody = estilosBody.backgroundColor;
console.log(backgroundColorBody)

for (let p of Ps){
  console.log(p)
  p.style.backgroundColor = backgroundColorBody
  p.style.color = `#fff` 
}
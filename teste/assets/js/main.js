const quad = document.querySelectorAll(`h1`);

function testar(e) {

   quad.forEach((e) => {
       e.classList.add(`quadrado-blue`)
   })

   e.target.classList.remove(`quadrado-blue`)
}

quad.forEach((item) => {
  item.addEventListener(`click`, testar);
});


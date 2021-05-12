let quad = document.querySelectorAll(`.quadrado`);
let soma = 0;
quad.forEach((item) => {
soma += item.addEventListener(`click`, function(){
    item.classList.toggle(`quadrado-blue`)
})
})
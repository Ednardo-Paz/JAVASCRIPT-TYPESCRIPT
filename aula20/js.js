function meuEscopo() {
    let form = document.querySelector(`.form`);
    let res = document.querySelector(`.res`);
    let pessoas = [];

    function receberEvento(e) {
        e.preventDefault();
        let nome = document.querySelector(`.nome`);
        let sobrenome = document.querySelector(`.sobrenome`);
        let peso= document.querySelector(`.peso`);
        let altura = document.querySelector(`.altura`);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        })
    
        res.innerHTML = `${nome.value}, ${sobrenome.value}`

       
    }

    form.addEventListener(`submit`, receberEvento);
  
    

}
meuEscopo();

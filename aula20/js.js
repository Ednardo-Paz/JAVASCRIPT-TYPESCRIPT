function meuEscope(){
    let form = document.querySelector(`.form`);
    let res = document.querySelector(`.res`);

    let pessoas = [];

    function receberEvento(evento){
        evento.preventDefault();
        let nome = document.querySelector(`.nome`);
        let sobrenome = document.querySelector(`.sobrenome`);
        let peso = document.querySelector(`.peso`);
        let altura = document.querySelector(`.altura`);

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });
        console.log(pessoas);
    }
        
    form.addEventListener(`submit`, receberEvento);
}
meuEscope();
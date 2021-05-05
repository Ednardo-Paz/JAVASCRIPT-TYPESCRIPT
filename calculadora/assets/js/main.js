//função contrutora
function Calculadora() {
  //- Atributos 
  this.display = document.querySelector(`.display`);

  //metodos   
  //1 - Metodo para iniciar a função e desencadear as outras;
  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  }
  //2- Metodo com evento para obter o clique das classe selecionada.
  this.capturaCliques = () => {
    document.addEventListener(`click`, e => {
      let el = e.target;
      if (el.classList.contains(`btn-num`)) this.addNumDisplay(el.innerText);
      if (el.classList.contains(`btn-clear`)) this.limpaDisplay();
      if (el.classList.contains(`btn-del`)) this.apagaUm();
      if (el.classList.contains(`btn-eq`)) this.realizaConta();

    })
  };
  //3 - Metodo para adicionar o valor no display;
  this.addNumDisplay = valor => this.display.value += valor;

  //4 - Metodo para limpar o display
  this.limpaDisplay = () => this.display.value = ``;

  //5 - Metodo para apagar o ultimo número
  this.apagaUm = () => this.display.value = this.display.value.slice(0, -1);

  //6- Metodo para realizar a conta
  this.realizaConta = () => {
    try {
      let conta = eval(this.display.value)
      if (!conta) {
        alert(`Conta inválida`)
        return;
      }
      this.display.value = conta
    } catch (e) {
      alert(`Conta inválida.`)
      return;
    }
  }
   //7- Metodo para realizar conta precionando o enter.
   this.capturaEnter = () => {
     document.addEventListener(`keypress`, e => {
       if(e.keyCode === 13) {
         this.realizaConta();
       }
     })
   }
}
let calculadora = new Calculadora();
calculadora.inicia();












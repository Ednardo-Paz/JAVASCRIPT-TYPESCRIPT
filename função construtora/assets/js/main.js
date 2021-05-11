function Calculadora () {

  this.display = document.querySelector(`.display`);


  this.inicia = () => {
    this.capturaClick();
    this.pressEnter();
  }

  this.capturaClick = () => {
    document.addEventListener(`click`, e =>{
      let el = e.target;
      if(el.classList.contains(`btn-num`)) this.addNUmDisplay(el);
      if(el.classList.contains(`btn-clear`)) this.limpaDisplay();
      if(el.classList.contains(`btn-del`)) this.apagaUltimo();
      if(el.classList.contains(`btn-eq`)) this.realizaConta();
    })
  }
   
  this.addNUmDisplay = (el) => {
    this.display.value += el.innerText;
  }

  this.limpaDisplay = () => {
    this.display.value = ``;
    this.display.focus()
  }

  this.apagaUltimo = () => {
    this.display.value = this.display.value.slice(0 , -1)
  }
  
  this.realizaConta = () => {
    try{
      let conta = eval(this.display.value)

      if(!conta){
        alert(`conta inválida`)
        return
      } else {
       this.display.value = conta
      }

      return
    }catch(e){
      alert( `Conta inválida`)
      return
    }
  
  };

  this.pressEnter = () => {
    document.addEventListener(`keypress`, e => {
      if(e.keyCode === 13) this.realizaConta();
    })
  }


}
let calc = new Calculadora();
calc. inicia(); 


//metodos
//1 - Metodo para iniciar a função e desencadear as outras;
//2- Metodo com evento para obter o clique das classe selecionada.

//3 - Metodo para adicionar o valor no display;

//4 - Metodo para limpar o display

//5 - Metodo para apagar o ultimo número

//6- Metodo para realizar a conta

//7- Metodo para realizar conta precionando o enter.

function criaCalculadora() {
  return {
    //- Atributos 
    display: document.querySelector(`.display`),
    btnClear: document.querySelector(`.btn-clear`),




    //metodos   
    //1 - Metodo para iniciar a função e desencadear as outras;
    inicia() {
      this.cliqueBotoes();
      this.precionaEnter();
    },
    //2- Metodo com evento para obter o clique das classe selecionada.
    cliqueBotoes() {
      document.addEventListener(`click`, (e) => {
        let el = e.target;
        if (el.classList.contains(`btn-num`)) {
          this.BtnParaDisplay(el.innerText);
        }
        if (el.classList.contains(`btn-clear`)) {
          this.clearDisplay();
        }
        if (el.classList.contains(`btn-del`)) {
          this.apagarUm();
        }
        if (el.classList.contains(`btn-eq`)) {
          this.realizaConta();
        }
      });
    },
    //3 - Metodo para adicionar o valor no display;
    BtnParaDisplay(valor) {
      this.display.value += valor;
    },
    clearDisplay() {
      this.display.value = ``;
    },
    apagarUm() {
      this.display.value = this.display.value.slice(0, -1);
    },
    //4 - Metodo para realizar a conta
    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);
        if (!conta) {
          alert(`Conta invalida`);
          return
        }
        this.display.value = conta;

      }catch (e){
        alert(`Conta inválida`)
        return;
      }
     
    },
    //5- Metodo para realizar conta precionando o enter.
    precionaEnter(){
     this.display.addEventListener(`keypress`, e => {
        if(e.keyCode === 13){
          this.realizaConta()
        }
      })
    },


  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
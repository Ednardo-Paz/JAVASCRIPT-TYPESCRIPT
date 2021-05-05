//Factory function
function criarCalculadora() {
  return {
    //- Atributos 
    display: document.querySelector(`.display`),

    //metodos   
    //1 - Metodo para iniciar a função e desencadear as outras;
    iniciar() {
      this.btnCalc();
      this.apertarEnter();
    },
    //2- Metodo com evento para obter o clique das classe selecionada.
    btnCalc() {
      document.addEventListener(`click`, e => {
        let el = e.target;
        if (el.classList.contains(`btn-num`)) {
          this.mostarNoDisplay(el.innerText)
        }
        if (el.classList.contains(`btn-clear`)) {
          this.limparDisplay();
        }
        if (el.classList.contains(`btn-del`)) {
          this.apagarUm();
        }
        if (el.classList.contains(`btn-eq`)) {
          this.realizaConta()
        }
      })
    },
    //3 - Metodo para adicionar o valor no display;
    mostarNoDisplay(valor) {
      this.display.value += valor
    },
    //4 - Metodo para limpar o display
    limparDisplay() {
      this.display.value = ` `;
    },
    //5 - Metodo para apagar o ultimo número
    apagarUm() {
      this.display.value = this.display.value.slice(0, -1)
    },
    //6- Metodo para realizar a conta
    realizaConta() {
      let conta = this.display.value

      try {
        conta = eval(conta)
        if (!conta) {
          alert(`Conta inválida.`)
          return
        }
        this.display.value = conta;
      }
      catch (e) {
        alert(`conta inválida`);
        return

      }
    },
    //7- Metodo para realizar conta precionando o enter.
    apertarEnter(){
      document.addEventListener(`keypress`, e => {
        if(e.keyCode === 13){
          this.realizaConta();
        }
      })
    }

  };
}

let calculadora = criarCalculadora();
calculadora.iniciar();















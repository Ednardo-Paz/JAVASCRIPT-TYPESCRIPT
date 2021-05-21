class ValidaFormulario{
  constructor(){
    this.formulario = document.querySelector(`.formulario`); 

    this.eventos();
    
  }

  eventos(){
    this.formulario.addEventListener(`submit`, (e) => {
      this.handleSubmit(e);
    });
  };

  handleSubmit(e){
    e.preventDefault();
    
    const validaCampos = this.camposSaoValidos();
    const validaSenhas = this.senhasSaoValidas();

    if(validaCampos && validaSenhas){
      alert(`Formulario enviado.`)
      this.formulario.submit()
    }

  };

  senhasSaoValidas(){
    const senha = this.formulario.querySelector(`.senha`);
    const repetirSenha = this.formulario.querySelector(`.repetir-senha`);
    let valid = true;

    if(senha.value !== repetirSenha.value){
      this.criaErro(senha, `"Senha" e "repetir senha" devem ser iguais. `)
      this.criaErro(repetirSenha, `"Senha" e "repetir senha" devem ser iguais. `)
      valid = false;
    }
    if(senha.value.length < 3 || senha.value.length > 12){
      this.criaErro(senha, `Senha deve conter entre 6 e 12 caracteres.`)
      valid = false;
    }
    
    return valid;

    
  }
  camposSaoValidos(){
    let valid = true
    for(let errorText of this.formulario.querySelectorAll(`.error-text`)){
      errorText.remove(`error-Text`);
    };

    for(let campo of this.formulario.querySelectorAll(`.validar`)){
      if(!campo.value){
        this.criaErro(campo, `O campo precisa ser preenchido.`);
        valid = false;
      }
      if(campo.classList.contains(`cpf`)){
       if(!this.validaCPF(campo)) valid = false 
      }
      if(campo.classList.contains(`usuario`)){
        if(!this.validaUsuario(campo)) valid = false 
       }
    }
    return valid;
  };
  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12){
      this.criaErro(campo, `Usuário deve conter entre 3 e 12 caracteres.`);
      valid = false;
    }
    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, `Nome do usuário deve conter apenas letra e/ou números.`)
      valid = false;
    }
    return valid;
  };
  validaCPF(campo){

    const CPF = new ValidaCPF(campo.value)

    if(!CPF.valida()){
      this.criaErro(campo, `CPF inválido.`);
      return false;
    }
    return true;
  }

  criaErro(campo, msg){
    const div = document.createElement(`div`);
    div.innerHTML = msg;
    div.classList.add(`error-text`)
    campo.insertAdjacentElement(`afterend`, div);
  }

};

const valida = new ValidaFormulario();
//função classes
class ValidarFormulario {
  constructor() {
    // 1 - pegar o elemento .formulario e disparar o metodo eventos.
    this.formulario = document.querySelector(`.formulario`);
    this.eventos();
  }
//2- criar o metodo addEvent e disparar a segunda handleSubmit
  eventos() {
    this.formulario.addEventListener(`submit`, (e) => {
      this.handleSubmit(e);
    });
  }
//3 - criar preventDefault e o metodo campos válidos.
  handleSubmit(e) {
    e.preventDefault();
    const camposValidos = this.camposValidos();
    const senhasValidas = this.senhasSaoValidas();

    if(camposValidos && senhasValidas) {
      alert(`Formulário enviado.`)
      this.formulario.submit();
    }


  }


   // Metodo para validar as senhas
   senhasSaoValidas(){
     let valid = true

    const senha = this.formulario.querySelector(`.senha`)
    const repetirSenha = this.formulario.querySelector(`.repetir-senha`);

    if(senha.value !== repetirSenha.value) {
      valid = false;
      this.criaErro(senha, `Campos senha e repetir senha precisão ser iguais. `);
      this.criaErro(repetirSenha, `Campos senha e repetir senha precisão ser iguais. `);

      if(senha.value.length < 6 || senha.value.length > 12) {
        valid = false;
        this.criaErro(senha, `Senha precisa estar entre 6 e 12 caracteres.`);
      }

    }

     return valid;
   }
//4 -  campos válidos criar a constante valid e o for com o a classe .validar. 
  camposValidos(){
    let valid = true;
     for(let errorText of this.formulario.querySelectorAll(`.error-text`)){
       errorText.remove()
     }
    //for com o metodo criaErro com 2 argumentos campo e a msg.
    for(let campo of this.formulario.querySelectorAll(`.validar`)){
      // const label = campo.previousElementSibling.innerText;
     // Metodo para os erros dos arrays dos campos
      if(!campo.value) {
        this.criaErro(campo, `Campo  não pode estar em branco.`)
        valid = false;
      }
      //verificar se é o campo de cpf
      if(campo.classList.contains(`cpf`)){
        if(!this.validaCPF(campo)) valid = false;
      }
      //verificar e gerar erro se o campo não for do usuário.
      if(campo.classList.contains(`usuario`)){
        if(!this.validaUsuario(campo)) valid = false;
      }
    }
    return valid;
  }
 // metodo para validar o usuário.
  validaUsuario(campo){
    const usuario = campo.value;
    let valid = true;

    if(usuario.length < 3 || usuario.length > 12){
    this.criaErro(campo, `usuario precisa ter entre 3 e 12 caracteres.`)
    valid = false;
    }

    if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
      this.criaErro(campo, `Nome de usuário precisa conter aprenas letras e/ou números.`)
      valid = false;
    }

    return valid;
  }
   
  //metodo para validar o cpf
  validaCPF(campo){
    const cpf = new ValidaCPF(campo.value);

    if(!cpf.valida()){
      this.criaErro(campo, `CPF inválido.`)
      return false;
    }
    return true;
  }
    //5 - metodo cria erro e cria o elemento div add a classe error-text e colocar o campo inseriAdjacentElement
  criaErro(campo, msg){
    const div = document.createElement(`div`);
    div.innerHTML = msg;
    div.classList.add(`error-text`);
    campo.insertAdjacentElement(`afterend`, div)
  }
}

//instância
const valida = new ValidarFormulario();

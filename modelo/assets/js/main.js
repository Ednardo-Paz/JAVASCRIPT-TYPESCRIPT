let form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, function(e){
  e.preventDefault();

  let inputPeso = document.querySelector(`#peso`);
  let inputAltura = document.querySelector(`#altura`);

  let peso = Number (inputPeso.value);
  let altura = Number (inputAltura.value);

  if(!peso){
    setResultado(`Peso invalido.`, false);
    return;
  }
  if(!altura){
    setResultado(`Altura inválida.`, false)
  }

  let imc = getImc(altura, peso);
  let nivel = getNivelImc(imc);

  let msg = `Seu imc é ${imc}, ${nivel}`

  setResultado(msg, true);


})

function getNivelImc(imc){
  let nivel = [`Abaixo do peso`, `Peso normal`, `SobrePeso`, `Obesidade grau 1 `, , `Obesidade grau 2 `, `Obesidade grau 3`];
  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc <  18.5) return nivel[0];
}

function getImc(altura, peso){
  let imc = peso / altura **2;
  return imc.toFixed(2);
}



function criaP(){
  let p = document.createElement(`p`);
  return p;
}

function setResultado(msg, isValid){
  let res = document.querySelector(`.res`);
  res.innerHTML = ``;
  let p = criaP();

  if(isValid){
    p.classList = `paragrafo-resultado`

  }else{
    p.classList = `bad`
  }
  p.innerHTML= msg;
  res.appendChild(p);
 
}
// pegar a classe formulário
let form = document.querySelector(`#formulario`);

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  console.log(`ola`)


  let inputPeso = e.target.querySelector(`#peso`);
  let inputAltura = e.target.querySelector(`#altura`);

  let peso = Number(inputPeso.value);
  let altura = Number(inputAltura.value);

  if (!peso) {
    res(`Peso inválido.`, false);
    return;
  }
  if (!altura) {
    res(`Altura inválida.`, false);
    return;
  }
  let imc = getImc(peso, altura);
  let nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} ${nivelImc}`

  res(msg, true);

  console.log(imc, nivelImc)
})

function getImc(peso, altura) {
  const imc = peso / altura ** 2;
  return (imc.toFixed(2));
}


function getNivelImc(imc) {
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',
    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}


function criaP() {
  let p = document.createElement(`p`);
  return p;
}

function res(msg, isValid) {
  let res = document.querySelector(`#resultado`);
  let p = criaP();
  if(isValid == true){
    p.classList = `paragrafo-resultado`;
  }else{
    p.classList = `bad`;
  }
  res.innerHTML = ``;
  p.innerHTML = msg;
  res.appendChild(p)
}

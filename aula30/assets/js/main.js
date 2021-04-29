// let data = new Date();
// let day = data.getDay();
// let mes = data.getMonth();
// let ano = data.getFullYear();
// let hora = data.getHours();
// let min = data.getMinutes();

// if(hora < 10){
//   hora = `0`+ hora
// }

// if(min < 10){
//   min = `0`+ min
// }
// day = 4;
// console.log(mes);

// let diaDaSemanaTexto;
// switch (day) {
//   case 0:
//     diaDaSemanaTexto = `Domingo`;
//     break;
//   case 1:
//     diaDaSemanaTexto = `Segunda-feira`;
//     break;
//   case 2:
//     diaDaSemanaTexto = `terça-feira`;
//     break;
//   case 3:
//     diaDaSemanaTexto = `Quarta-feira`;
//     break;
//   case 4:
//     diaDaSemanaTexto = `Quinta-feira`;
//     break;
//   case 5:
//     diaDaSemanaTexto = `Seta-feira`;
//     break;
//   case 6:
//     diaDaSemanaTexto = `Sabado`
//     break;
//   default:
//     diaDaSemanaTexto = ``;
// }

// let mesTexto;
// switch (mes) {
//   case 0:
//     mesTexto = `Janeiro`;
//     break;
//   case 1:
//     mesTexto = `fevereiro`;
//     break;
//   case 2:
//     mesTexto = `março`;
//     break;
//   case 3:
//     mesTexto = `abril`;
//     break;
//   case 4:
//     mesTexto = `maio`;
//     break;
//   case 5:
//     mesTexto = `junho`;
//     break;
//   case 6:
//     mesTexto = `julho`
//     break;
//   case 7:
//     mesTexto = `julho`
//     break;
//   case 8:
//     mesTexto = `agosto`
//     break;
//   case 9:
//     mesTexto = `setembro`
//     break;
//   case 10:
//     mesTexto = `outubro`
//     break;
//   case 11:
//     mesTexto = `novembro`
//     break;
//   case 12:
//     mesTexto = `dezembro`
//     break;
//   default:
//     mesTexto = ``;
// }
// console.log(day, diaDaSemanaTexto);


// let h1 = document.querySelector(`.h1`);
// h1.innerHTML = `${diaDaSemanaTexto}, ${day} de ${mesTexto} de ${ano} ${hora}:${min}`;


let h1 = document.querySelector(`.h1`);
const data = new Date();
h1.innerHTML = data.toLocaleDateString(`pt-Br`, {dateStyle: `full`, timeStyle: `short`});


let relogio = document.querySelector(`.relogio`);
let iniciar = document.querySelector(`.iniciar`);
let pausar = document.querySelector(`.pausar`);
let zerar = document.querySelector(`.zerar`);
let seconds = 0;
let timer;

function setSeconds(seconds) {
    let data = new Date(seconds * 1000);
    return data.toLocaleTimeString(`pt-BR`, { hour12: false, timeZone: `UTC` })
}

document.addEventListener(`click`, function (e) {
    let el = e.target;

    if (el.classList.contains(`zerar`)) {
        relogio.classList.remove(`pausado`)
        clearInterval(timer)
        relogio.innerHTML = `00:00:00`
        seconds = 0;
    }

    if (el.classList.contains(`iniciar`)) {
        relogio.classList.remove(`pausado`)
        clearInterval(timer)
        startWatch();
    }
    if (el.classList.contains(`pausar`)) {
        relogio.classList.add(`pausado`)
        clearInterval(timer)
    }
})


function startWatch() {
    timer = setInterval(function () {
        relogio.innerHTML = setSeconds(seconds);
        seconds++
    }, 1000);
}


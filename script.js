const h1 = document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btncalcular");
const presult = document.querySelector("#result");
const form = document.querySelector("#formulario");
let x = 0;
let y = 0;
form.addEventListener("submit", sumarInfoPagina);
input1.addEventListener("click", sumarUno);
input2.addEventListener("mouseover", sumarDos);
function sumarUno(event) {
  x++;
  input1.innerText = x;
}
function sumarDos(event) {
  y++;
  input2.innerText = y;
}

function sumarInfoPagina(event) {
  console.log(event);
  event.preventDefault();
  const sumaInputs = parseInt(input1.innerText) + parseInt(input2.innerText);
  presult.innerText = "Resultado: " + sumaInputs;
}

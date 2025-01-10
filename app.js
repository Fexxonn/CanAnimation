const btnLeft = document.getElementById("left");
const btnRight = document.getElementById("right");
const Cervezas = document.querySelector(".Cervezas");

const titulo = document.querySelector(".title");
const texto = ["Heineken", "Poker", "Budweiser"];
let position = 0;

const actualizar = () => {
  switch (position) {
    case 0:
      btnLeft.style.color = "transparent";
      btnLeft.style.background = "transparent";
      btnRight.style.background = "#061d00";
      break;
    case 1:
      btnLeft.style.color = "white";
      btnLeft.style.background = "#c6711dd2";
      btnRight.style.background = "#c6711dd2";
      btnRight.style.display = "flex";

      break;
    case 2:
      btnLeft.style.background = "#310000";
      btnRight.style.display = "none";
      break;

    default:
      break;
  }

  Cervezas.classList.remove("Cervezas");
  void Cervezas.offsetWidth;
  Cervezas.classList.add("Cervezas");

  titulo.classList.remove("title");
  void Cervezas.offsetWidth;
  titulo.classList.add("title");

  titulo.innerHTML = texto[position];
  document.body.style.setProperty("--position", position);
};
const siguiente = () => {
  if (position < 2) position++;
  actualizar();
};
const anterior = () => {
  if (position > 0) position--;
  actualizar();
};
actualizar();

btnLeft.onclick = anterior;
btnRight.onclick = siguiente;

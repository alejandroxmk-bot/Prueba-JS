const btn = document.getElementById("btn");
const prf = document.getElementById("parrafo");
const caja = document.querySelector(".caja");

const cambiar_texto = () => {
  prf.textContent = "Texto cambiado";
};
const cambiar_caja = () => {
  caja.classList.add("caja_cambiada");
};

btn.addEventListener("click", cambiar_texto);
btn.addEventListener("click", cambiar_caja);

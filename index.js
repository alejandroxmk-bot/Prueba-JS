const btn = document.getElementById("btn");
const prf = document.getElementById("parrafo");
const caja = document.querySelector(".caja");

const cambios = () => {
  prf.textContent = "Texto cambiado";
  caja.classList.add("caja_cambiada");
  setTimeout(() => {
    caja.classList.remove("caja_cambiada");
    prf.textContent = "Da click para cambiar";
  }, 2000);
};

btn.addEventListener("click", cambios);

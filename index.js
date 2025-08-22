const btn = document.getElementById("btn");
const prf = document.getElementById("parrafo");

const cambiar_texto = () => {
  prf.textContent = "Texto cambiado";
};

btn.addEventListener("click", cambiar_texto);

// Contador de visitas persistente utilizando localStorage.
// Botón de "Reestablecer Contador" para reiniciar el contador a cero.

// añadir un +1 cada vez que se recarga la pagina

// el numero de visita tiene que guardarse aun si se cierra la pagina

// Si deseas reiniciar el contador,
// haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.

let container = document.querySelector(".container");
let contadorVisitas = document.getElementById("contadorVisitas");
let botonReestablecer = document.getElementById("btnReestablecer");

let visitas = localStorage.getItem("visitas");
if (!visitas) {
  visitas = 0;
}
visitas = parseInt(visitas, 10);
contadorVisitas.innerHTML = visitas;
// console.log(localStorage.getItem("visitas"));

window.addEventListener("load", () => {
  visitas += 1;
  localStorage.setItem("visitas", visitas);
  contadorVisitas.innerHTML = visitas;
});
// console.log(localStorage.getItem("visitas"));

botonReestablecer.addEventListener("click", () => {
  localStorage.setItem("visitas", "1");

  document.getElementById("contadorVisitas").innerHTML = "1";
});

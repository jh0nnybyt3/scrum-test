import { db } from "./db.js";
import {
  ref,
  push,
  get,
  child,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Registrar mascota
$("#mascotaForm").on("submit", function (event) {
  event.preventDefault();
  const nombre = $("#nombre").val();
  const especie = $("#especie").val();
  const mascota = { nombre, especie };

  const mascotasRef = ref(db, "mascotas/");
  push(mascotasRef, mascota)
    .then(() => {
      alert("Mascota registrada exitosamente!");
      $("#mascotaForm")[0].reset();
      cargarMascotas();
    })
    .catch((error) => alert("Error al registrar mascota: " + error));
});

// Captura de errores en cargarMascotas
function cargarMascotas() {
  $("#listaMascotas").empty();
  db.ref("mascotas/")
    .once("value")
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const mascota = childSnapshot.val();
        const li = `<li class="list-group-item">${mascota.nombre} - ${mascota.especie}</li>`;
        $("#listaMascotas").append(li);
      });
    })
    .catch((error) => console.error("Error al cargar mascotas: ", error));
}

// Cargar mascotas al iniciar
$(document).ready(function () {
  cargarMascotas();
});

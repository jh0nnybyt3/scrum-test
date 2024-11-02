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
  const estado = $("#estado").val(); // Estado (pedido o encontrado)
  const descripcion = $("#descripcion").val();
  const imagen = $("#imagen").val();
  
  const mascota = { nombre, estado, descripcion, imagen };

  const mascotasRef = ref(db, "mascotas/");
  push(mascotasRef, mascota)
    .then(() => {
      alert("Mascota registrada exitosamente!");
      $("#mascotaForm")[0].reset();
      cargarMascotas();
    })
    .catch((error) => alert("Error al registrar mascota: " + error));
});

// Cargar mascotas
function cargarMascotas() {
  $("#listaMascotas").empty();
  const mascotasRef = ref(db, "mascotas/");
  get(mascotasRef)
    .then((snapshot) => {
      snapshot.forEach((childSnapshot) => {
        const mascota = childSnapshot.val();
        const li = `
          <li class="list-group-item">
            <h5>${mascota.nombre} - ${mascota.estado}</h5>
            <p>${mascota.descripcion}</p>
            <img src="${mascota.imagen}" alt="${mascota.nombre}" style="width:100px; height:auto;">
          </li>`;
        $("#listaMascotas").append(li);
      });
    })
    .catch((error) => console.error("Error al cargar mascotas: ", error));
}

// Cargar mascotas al iniciar
$(document).ready(function () {
  cargarMascotas();
});

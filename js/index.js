// Registrar mascota
$("#mascotaForm").on("submit", function (event) {
  event.preventDefault();
  const nombre = $("#nombre").val();
  const especie = $("#especie").val();
  const mascota = { nombre, especie };

  database
    .ref("mascotas/")
    .push(mascota)
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
  database
    .ref("mascotas/")
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
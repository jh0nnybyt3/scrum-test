// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCssRF6jbt0ixSpHGWDxoyInioBoqs_ZS0",
  authDomain: "scrum-700ac.firebaseapp.com",
  databaseURL: "https://scrum-700ac-default-rtdb.firebaseio.com",
  projectId: "scrum-700ac",
  storageBucket: "scrum-700ac.firebasestorage.app",
  messagingSenderId: "768204153242",
  appId: "1:768204153242:web:9ef6106f92cc846ddd5a23",
  measurementId: "G-6ET3WHD98H",
};

// Inicializar Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

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

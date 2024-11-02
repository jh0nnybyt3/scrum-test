import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const auth = getAuth();
signInAnonymously(auth)
  .then(() => {
    console.log("Usuario autenticado anónimamente");
  })
  .catch((error) => {
    console.error("Error en la autenticación anónima:", error);
  });

// Configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCssRF6jbt0ixSpHGWDxoyInioBoqs_ZS0",
  authDomain: "https://jh0nnybyt3.github.io/scrum-test/",
  databaseURL: "https://scrum-700ac-default-rtdb.firebaseio.com",
  projectId: "scrum-700ac",
  storageBucket: "scrum-700ac.firebasestorage.app",
  messagingSenderId: "768204153242",
  appId: "1:768204153242:web:9ef6106f92cc846ddd5a23",
  measurementId: "G-6ET3WHD98H",
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app, auth };
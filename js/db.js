import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-analytics.js";

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
  const app = firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
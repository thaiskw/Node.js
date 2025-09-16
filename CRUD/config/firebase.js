// Importa apenas o que é necessário para Node.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Config do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCappDU27vgFjRxIlu2fMejQOmQroITUyY",
  authDomain: "crud-node-147f5.firebaseapp.com",
  databaseURL: "https://crud-node-147f5-default-rtdb.firebaseio.com",
  projectId: "crud-node-147f5",
  storageBucket: "crud-node-147f5.firebasestorage.app",
  messagingSenderId: "18563621591",
  appId: "1:18563621591:web:88d33fc1ea86f2b44a0692"
  // measurementId não precisa no Node.js
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Exporta db
export { db };

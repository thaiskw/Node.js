// config/firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCappDU27vgFjRxIlu2fMejQOmQroITUyY",
  authDomain: "crud-node-147f5.firebaseapp.com",
  databaseURL: "https://crud-node-147f5-default-rtdb.firebaseio.com",
  projectId: "crud-node-147f5",
  storageBucket: "crud-node-147f5.firebasestorage.app",
  messagingSenderId: "18563621591",
  appId: "1:18563621591:web:88d33fc1ea86f2b44a0692",
  measurementId: "G-44WEZR865Q"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };

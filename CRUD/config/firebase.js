// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app)
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
export const firebaseConfig = {
  apiKey: "AIzaSyCgmRRcBcky6EYHS_B5ilF8gJfGnerkIe8",
  authDomain: "retaguardashop-d0672.firebaseapp.com",
  projectId: "retaguardashop-d0672",
  storageBucket: "retaguardashop-d0672.firebasestorage.app",
  messagingSenderId: "867351933646",
  appId: "1:867351933646:web:aee5edcc7877ff3e51169f",
  measurementId: "G-C6E8HR122H"
};

// Inicialização do Firebase
const app = initializeApp(firebaseConfig);

// Exportação do Firestore
export const db = getFirestore(app);

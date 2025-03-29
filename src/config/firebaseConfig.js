import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAJX0CakVfEwLfyKab1xv1aTyvxQxjjEgU",
    authDomain: "tinacocostyle.firebaseapp.com",
    projectId: "tinacocostyle",
    storageBucket: "tinacocostyle.firebasestorage.app",
    messagingSenderId: "64411568478",
    appId: "1:64411568478:web:6a87bd5404a51fd33427cf"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
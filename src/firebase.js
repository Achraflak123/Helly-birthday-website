import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, onSnapshot, orderBy, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBR5q3irxUMjYybg4VdQ09Z7WNrTc-ZTuk",
  authDomain: "hala-birthday-website.firebaseapp.com",
  projectId: "hala-birthday-website",
  storageBucket: "hala-birthday-website.firebasestorage.app",
  messagingSenderId: "179445354136",
  appId: "1:179445354136:web:1302d7ae968f39fc804aed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc, onSnapshot, orderBy, query };

// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// const firebaseConfig = {
//     apiKey: "AIzaSyCKST51aP33V_92HrWPMD4t_nKUUFdJg7Q",
//     authDomain: "practise-firebase-58424.firebaseapp.com",
//     projectId: "practise-firebase-58424",
//     storageBucket: "practise-firebase-58424.appspot.com",
//     messagingSenderId: "441131277120",
//     appId: "1:441131277120:web:d91ff28f5d00fb712ff8a5"
// };

// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

// export{
//     auth,
//     createUserWithEmailAndPassword,
//     signInWithEmailAndPassword
    
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  query,
  getDocs,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCKST51aP33V_92HrWPMD4t_nKUUFdJg7Q",
    authDomain: "practise-firebase-58424.firebaseapp.com",
    projectId: "practise-firebase-58424",
    storageBucket: "practise-firebase-58424.appspot.com",
    messagingSenderId: "441131277120",
    appId: "1:441131277120:web:d91ff28f5d00fb712ff8a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  db,
  collection,
  addDoc,
  setDoc,
  doc,
  getDoc,
  getDocs,
  query,
  deleteDoc
};
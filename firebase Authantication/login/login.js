// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

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

import{auth,signInWithEmailAndPassword}from "../utils.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signUpBtn");
let login = document.getElementById("loginBtn");



// login function

login.addEventListener("click", () => {
    console.log('login clicked');

    signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            setTimeout(() => {
                window.location.href = "../home/index.html"
            })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            return alert("please enter valid email and password")
            console.log(errorMessage);
        });

})


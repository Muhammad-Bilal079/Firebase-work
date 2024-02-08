import{auth,createUserWithEmailAndPassword} from "../utils.js";

let email = document.getElementById("email");
let password = document.getElementById("password");
let signup = document.getElementById("signUpBtn");
let fullname = document.getElementById("fullName");
let region = document.getElementById("region");
let login = document.getElementById("loginBtn");

//  signup function 

signup.addEventListener ("click",() => {
    createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setTimeout(() => {
                window.location.href = "../login/login.html";
            })
            
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // console.log(errorMessage);
            return alert(errorMessage)
        });
    // console.log(email.value)
    // console.log(password.value);
    
})




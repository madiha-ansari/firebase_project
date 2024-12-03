import { signInWithEmailAndPassword ,getAuth, GoogleAuthProvider, signInWithPopup} from "./firebase.js";
import {email, password} from "./signup.js";

const auth = getAuth();

let signInPassword = document.getElementById("signInPassword")
let  signInEmail = document.getElementById("signInEmail")

let loginBtn = document.getElementById("loginBtn")

loginBtn && loginBtn.addEventListener("click", () => {
  if (signInEmail.value.trim() && signInPassword.value.trim()) {
      signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
      .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          window.location.href = "profile.html";
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // console.log(errorMessage);
          Swal.fire({
            icon: "warning",
            title: errorMessage,
            customClass: {
              confirmButton: 'custom-ok-button'
            }
          });
      });
  } else {
    Swal.fire({
      icon: "warning",
      title: "Please, fill all the fields!",
      customClass: {
        confirmButton: 'custom-ok-button'
      }
    });
  }
});



document.getElementById("signinForm").addEventListener("submit", function (event) {
  // location.href = "profile.html";
  if (signInEmail === email){
    if (signInPassword === password){
      location.href = "profile.html";
    }
  }
  else{
    Swal.fire({
      icon: "warning",
      title: "You've entered wrong credentials!",
      customClass: {
        confirmButton: 'custom-ok-button'
      }
    });
  }
});


const provider = new GoogleAuthProvider();

// Google Login Button Handler
// const auth = getAuth();
document.getElementById('loginWithGoogle').addEventListener('click', () => {
  console.log("fszgbn");
  
  // Start Google login process
  signInWithPopup(auth, provider)
    .then((result) => {
      // On success
      const user = result.user;
      const credential = result.credential;
      const token = credential.accessToken;
      console.log("User:", user);
      console.log("Token:", token);
    })
    .catch((error) => {
      // Handle Errors here
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
});
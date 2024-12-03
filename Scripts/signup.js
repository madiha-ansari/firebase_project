import { getAuth, createUserWithEmailAndPassword} from "./firebase.js";

const auth = getAuth();

const Pages = {
  signin: "Pages/signin.html",
  profile: "Pages/profile.html",
  posts: "Pages/posts.html"
};

let name = document.getElementById("signupName");
// console.log(name.value)
let email = document.getElementById("signupEmail");
let password = document.getElementById("signupPassword");
let regbtn = document.getElementById("registerBtn");

function validateEmail(email) {
  // Simple regex for validating email format
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validatePassword(password) {
  // Check that password is at least 6 characters long
  return password.length >= 6;
}

regbtn && regbtn.addEventListener("click", () => {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const nameValue = name.value.trim();

  // Check if fields are empty
  if (!emailValue || !passwordValue || !nameValue) {
Swal.fire({
      icon: "warning",
      title: "Please, fill all the fields!",
      customClass: {
        confirmButton: 'custom-ok-button'
      }
    });    return;
  }


  // Validate email and password format
  if (!validateEmail(emailValue)) {
    Swal.fire({
      icon: "warning",
      title: "Please, enter a valid email!",
      customClass: {
        confirmButton: 'custom-ok-button'
      }
    });
    
    return;
  }
  if (!validatePassword(passwordValue)) {
    Swal.fire({
      icon: "warning",
      title: "Password should be at leat 6 digits long!",
      customClass: {
        confirmButton: 'custom-ok-button'
      }
    });
        return;
  }

  // Create user if validation passes
  createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      // Redirect to the sign-in page after successful registration
      window.location.href = Pages.signin;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      if (errorMessage === "Firebase: Error (auth/email-already-in-use).") {
        console.log("Email already in use, please use another email.");
      }
    });
});



export {email, password}
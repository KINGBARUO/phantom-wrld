// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
getAuth,
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2BYhVD99NeTy2h0Y0VHt1WTbCIr5Noo0",
  authDomain: "phantom-wrld.firebaseapp.com",
  projectId: "phantom-wrld",
  storageBucket: "phantom-wrld.firebasestorage.app",
  messagingSenderId: "199643142614",
  appId: "1:199643142614:web:ee69399f2435e90a2e2c77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

// ==========================
// SIGN UP
// ==========================

window.signUp = function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("Account created successfully!");

            window.location.href = "index.html";

        })

        .catch((error) => {

            alert(error.message);

        });

};

import { 
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


// Login function
window.login = function() {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;


  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert(error.message);
    });

};

// Sign Up
window.signUp = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Account created successfully!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Login
window.login = function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            alert("Login successful!");
            window.location.href = "index.html";
        })
        .catch((error) => {
            alert(error.message);
        });
};

// Logout
window.logout = function () {
    signOut(auth).then(() => {
        alert("Logged out.");
    });
};

// ==========================
// LOGOUT
// ==========================

window.logout = function () {

    signOut(auth)

        .then(() => {

            alert("You have been logged out.");

            window.location.href = "login.html";

        })

        .catch((error) => {

            alert(error.message);

        });

};

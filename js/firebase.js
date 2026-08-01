// ==========================================
// PHANTOM WRLD - FIREBASE AUTHENTICATION
// ==========================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";


// ==========================================
// FIREBASE CONFIGURATION
// ==========================================

const firebaseConfig = {
    apiKey: "AIzaSyA2BYhVD99NeTy2h0Y0VHt1WTbCIr5Noo0",
    authDomain: "phantom-wrld.firebaseapp.com",
    projectId: "phantom-wrld",
    storageBucket: "phantom-wrld.firebasestorage.app",
    messagingSenderId: "199643142614",
    appId: "1:199643142614:web:ee69399f2435e90a2e2c77"
};


// ==========================================
// INITIALIZE FIREBASE
// ==========================================

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);


// ==========================================
// SIGN UP
// ==========================================

window.signUp = function () {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput || !passwordInput) {
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        return;
    }

    createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("Account created successfully!");

            window.location.href = "index.html";

        })

        .catch((error) => {

            if (error.code === "auth/email-already-in-use") {
                alert("This email is already registered. Please login instead.");
            }

            else if (error.code === "auth/invalid-email") {
                alert("Please enter a valid email address.");
            }

            else if (error.code === "auth/weak-password") {
                alert("Your password is too weak. Use at least 6 characters.");
            }

            else {
                alert(error.message);
            }

        });

};


// ==========================================
// LOGIN
// ==========================================

window.login = function () {

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    if (!emailInput || !passwordInput) {
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    if (!email || !password) {
        alert("Please enter your email and password.");
        return;
    }

    signInWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {

            alert("Login successful!");

            window.location.href = "index.html";

        })

        .catch((error) => {

            if (
                error.code === "auth/invalid-credential" ||
                error.code === "auth/wrong-password" ||
                error.code === "auth/user-not-found"
            ) {
                alert("Incorrect email or password.");
            }

            else {
                alert(error.message);
            }

        });

};


// ==========================================
// LOGOUT
// ==========================================

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


// ==========================================
// LOGIN STATUS
// ==========================================

onAuthStateChanged(auth, (user) => {

    const loginLink = document.getElementById("login-link");
    const signupLink = document.getElementById("signup-link");
    const logoutButton = document.getElementById("logout-button");

    if (user) {

        if (loginLink) {
            loginLink.style.display = "none";
        }

        if (signupLink) {
            signupLink.style.display = "none";
        }

        if (logoutButton) {
            logoutButton.style.display = "inline-block";
        }

    }

    else {

        if (loginLink) {
            loginLink.style.display = "inline-block";
        }

        if (signupLink) {
            signupLink.style.display = "inline-block";
        }

        if (logoutButton) {
            logoutButton.style.display = "none";
        }

    }

});

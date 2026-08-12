// =====================================
// auth.js
// Authentication
// =====================================

import {
    getStudent,
    saveStudent,
    setLoginStatus,
    removeLoginStatus
} from "./state.js";

import {
    validateName,
    validateEmail,
    validatePassword,
    validateConfirmPassword
} from "./validation.js";


// ==========================
// Register
// ==========================

export function registerStudent(
    name,
    email,
    password,
    confirmPassword
) {

    if (!validateName(name)) {
        return;
    }

    if (!validateEmail(email)) {
        return;
    }

    if (!validatePassword(password)) {
        return;
    }

    if (
        !validateConfirmPassword(
            password,
            confirmPassword
        )
    ) {
        return;
    }


    const student = {

        name: name,
        email: email,
        password: password

    };


    saveStudent(student);


    alert("Registration Successful");


    window.location = "login.html";
}


// ==========================
// Login
// ==========================

export function loginStudent(email, password) {

    const storedUser = getStudent();


    if (!storedUser) {

        alert("Please register first");

        return;
    }


    if (
        email === storedUser.email &&
        password === storedUser.password
    ) {

        setLoginStatus("true");


        alert("Login Successful");


        window.location = "dashboard.html";

    }

    else {

        alert("Invalid Email or Password");

    }
}


// ==========================
// Logout
// ==========================

export function logout() {

    removeLoginStatus();


    alert("Logout Successful");


    window.location = "login.html";
}

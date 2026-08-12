// =====================================
// app.js
// Main Application
// =====================================

import {
    registerStudent,
    loginStudent,
    logout
} from "./auth.js";

import {
    checkLogin,
    protectDashboard
} from "./navigation.js";

import {
    getStudent
} from "./state.js";


document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ==========================
        // Run Navigation Functions
        // ==========================

        checkLogin();

        protectDashboard();


        // ==========================
        // Populate Profile Card
        // ==========================

        const student = getStudent();

        const profileName =
            document.getElementById("profileName");

        const profileEmail =
            document.getElementById("profileEmail");

        if (student && profileName) {
            profileName.textContent = student.name;
        }

        if (student && profileEmail) {
            profileEmail.textContent = student.email;
        }


        // ==========================
        // Register Form
        // ==========================

        const registerForm =
            document.getElementById("registerForm");


        if (registerForm) {

            registerForm.addEventListener(
                "submit",
                function (e) {

                    e.preventDefault();


                    const name =
                        document.getElementById(
                            "name"
                        ).value;


                    const email =
                        document.getElementById(
                            "email"
                        ).value;


                    const password =
                        document.getElementById(
                            "password"
                        ).value;


                    const confirmPassword =
                        document.getElementById(
                            "confirmPassword"
                        ).value;


                    registerStudent(
                        name,
                        email,
                        password,
                        confirmPassword
                    );

                }
            );

        }


        // ==========================
        // Login Form
        // ==========================

        const loginForm =
            document.getElementById("loginForm");


        if (loginForm) {

            loginForm.addEventListener(
                "submit",
                function (e) {

                    e.preventDefault();


                    const email =
                        document.getElementById(
                            "email"
                        ).value;


                    const password =
                        document.getElementById(
                            "password"
                        ).value;


                    loginStudent(
                        email,
                        password
                    );

                }
            );

        }


        // ==========================
        // Logout
        // ==========================

        const logoutLink =
            document.getElementById("logoutLink");


        if (logoutLink) {

            logoutLink.addEventListener(
                "click",
                function (e) {

                    e.preventDefault();

                    logout();

                }
            );

        }

    }
);

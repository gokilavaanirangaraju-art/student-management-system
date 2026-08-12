// =====================================
// navigation.js
// Navigation & Dashboard Protection
// =====================================

import {
    getStudent,
    getLoginStatus
} from "./state.js";


// ==========================
// Check Login Status
// ==========================

export function checkLogin() {

    const user = getStudent();


    const dashboardLink =
        document.getElementById("dashboardLink");

    const loginLink =
        document.getElementById("loginLink");

    const registerLink =
        document.getElementById("registerLink");

    const logoutLink =
        document.getElementById("logoutLink");


    if (user && getLoginStatus() === "true") {

        if (dashboardLink) {
            dashboardLink.style.display = "inline";
        }

        if (logoutLink) {
            logoutLink.style.display = "inline";
        }

        if (loginLink) {
            loginLink.style.display = "none";
        }

        if (registerLink) {
            registerLink.style.display = "none";
        }

    }

}


// ==========================
// Dashboard Protection
// ==========================

export function protectDashboard() {

    const status = getLoginStatus();


    if (
        window.location.pathname.includes(
            "dashboard.html"
        )
        &&
        status !== "true"
    ) {

        alert("Please Login First");


        window.location = "login.html";
    }

}

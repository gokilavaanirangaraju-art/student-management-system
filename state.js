// =====================================
// state.js
// Application State Management
// =====================================

export function getStudent() {

    const student =
        localStorage.getItem("student");

    if (!student) {
        return null;
    }

    return JSON.parse(student);
}


export function saveStudent(student) {

    localStorage.setItem(
        "student",
        JSON.stringify(student)
    );
}


export function getLoginStatus() {

    return localStorage.getItem("loginStatus");
}


export function setLoginStatus(status) {

    localStorage.setItem(
        "loginStatus",
        status
    );
}


export function removeLoginStatus() {

    localStorage.removeItem("loginStatus");
}

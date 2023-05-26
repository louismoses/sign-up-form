"use strict";
const firstName = document.querySelector("#first-name-el");
const middleName = document.querySelector("#middle-name-el");
const lastName = document.querySelector("#last-name-el");
const loginForm = document.querySelector("#loginForm");

let validate = {
  firstname: false,
  lastname: false,
  email: false,
  contact: false,
  password: false,
  confirm_password: false,
};

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (
    validate.firstname === true &&
    validate.lastname === true &&
    validate.email === true &&
    validate.contact === true &&
    validate.password === true &&
    validate.confirm_password === true
  ) {
    loginForm.submit();
  }
});

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

firstName.onkeyup = (e) => {
  if (e.target.value.length > 20) {
    firstName.style.color = "red";
    firstName.nextElementSibling.style.color = "red";
    firstName.previousElementSibling.classList.remove("d-none");
    firstName.previousElementSibling.innerHTML = "Maximum of 20 character";
    validate.firstname = true;
  } else {
    console.log("moses");
  }
};
lastName.onkeyup = (e) => {
  if (e.target.value.length > 20) {
    lastName.style.color = "red";
    lastName.nextElementSibling.style.color = "red";
    lastName.previousElementSibling.classList.remove("d-none");
    lastName.previousElementSibling.innerHTML = "Maximum of 20 character";
    validate.lastname = true;
  } else {
    console.log("moses");
  }
};

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
    validate.firstname = false;
  } else {
    firstName.style.color = "green";
    firstName.nextElementSibling.style.color = "green";
    firstName.previousElementSibling.classList.add("d-none");
    validate.firstname = true;
  }
};
middleName.onkeyup = (e) => {
  if (e.target.value.length > 20) {
    middleName.style.color = "red";
    middleName.nextElementSibling.style.color = "red";
    middleName.previousElementSibling.classList.remove("d-none");
    middleName.previousElementSibling.innerHTML = "Maximum of 20 character";
    validate.middlename = false;
  } else {
    middleName.style.color = "green";
    middleName.nextElementSibling.style.color = "green";
    middleName.previousElementSibling.classList.add("d-none");
    validate.middlename = true;
  }
};
lastName.onkeyup = (e) => {
  if (e.target.value.length > 20) {
    lastName.style.color = "red";
    lastName.nextElementSibling.style.color = "red";
    lastName.previousElementSibling.classList.remove("d-none");
    lastName.previousElementSibling.innerHTML = "Maximum of 20 character";
    validate.lastname = false;
  } else {
    lastName.style.color = "green";
    lastName.nextElementSibling.style.color = "green";
    lastName.previousElementSibling.classList.add("d-none");
    validate.lastname = true;
  }
};

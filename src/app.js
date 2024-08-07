/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

document.addEventListener("DOMContentLoaded", () => {
  let button = document.getElementById("submit");
  let missingDiv = document.getElementById("missing-div");
  missingDiv.style.display = "none";

  button.addEventListener("click", event => {
    event.preventDefault();

    let inputs = document.querySelectorAll("input, textarea");

    let isValid = true;
    inputs.forEach(input => {
      input.classList.remove("input-error");

      if (input.id === "cardNumber") {
        if (!/^\d{16}$/.test(input.value)) {
          isValid = false;
          //missingDiv.innerHTML = "Numero de tarjeta invalido";
          input.classList.add("input-error");
        }
      } else if (input.id === "cvcNumber") {
        if (!/^\d{3}$/.test(input.value)) {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.id === "nameId") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.type === "textarea") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.id === "amount") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.id === "cityId") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.id === "lastnameId") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.id === "stateId") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      } else if (input.id === "postalCodeId") {
        if (input.value.trim() === "") {
          isValid = false;
          input.classList.add("input-error");
        }
      }
    });

    if (!isValid) {
      missingDiv.style.display = "block";
    } else {
      missingDiv.style.display = "none";
    }
  });
});

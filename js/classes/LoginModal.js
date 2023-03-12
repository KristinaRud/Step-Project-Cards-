
import Requests from "./Requests.js";
import {changedBtnAuth} from "../functional/functional.js";

export default class LoginModal {
  constructor() {}

  showPassword(e) {
    const iconTarget = e.target.closest("i");

    if (iconTarget) {
      iconTarget.classList.toggle("bi-eye-fill");
      iconTarget.classList.toggle("bi-eye-slash-fill");

      const type = iconTarget.classList.contains("bi-eye-slash-fill")
        ? "text"
        : "password";
      iconTarget.previousElementSibling.setAttribute("type", type);
    }
  }

  render() {
    const formTemplate = document.querySelector(".login").content;
    const div = formTemplate.querySelector("div");
    const divClone = div.cloneNode(true);
    const form = divClone.querySelector("form");


    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const email = form.querySelector("#login-input").value;
      const password = form.querySelector("#password").value;


      Requests.sendLogin(email, password)
          .then(() => {
            const btn = document.querySelector('.btn-autorize');
            const title = document.querySelector('.title-auth');
            changedBtnAuth(btn, title);

            divClone.remove();

          })
          .catch((error) => {
            if (!form.querySelector(".error-message")) {
              const errorMessage = document.createElement("p");
              errorMessage.textContent = error.message;
              errorMessage.classList.add("error-message");
              form.append(errorMessage);
            }
          })
    });

    const btnClose = form.querySelector(".login-cancel");

    btnClose.addEventListener("click", (event) => {
      event.preventDefault();
      document.querySelector(".wrapper-login").remove();
    })

    form.addEventListener("click", this.showPassword.bind(this));

    return divClone;
  }

}

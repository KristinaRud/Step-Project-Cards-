import logIn from "../api/api.js";
import { setTokenToLocalStorage } from "../api/api.js";

export default class Login {
  constructor(){
  }

  async handleSubmit(event) {
    event.preventDefault();
    if (!this.validate(event.currentTarget)) {
      return;
    }
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      const token = await logIn(email, password);
      setTokenToLocalStorage(token);
    } catch (error) {
      console.error(error);
      alert("Failed to log in");
    }
  }

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

  validate(form) {
    let isValid = true;

    if (form.email.value === "") {
      form.email.classList.add("is-invalid");
      isValid = false;
    } else {
      form.email.classList.remove("is-invalid");
    }

    if (form.password.value === "") {
      form.password.classList.add("is-invalid");
      isValid = false;
    } else {
      form.password.classList.remove("is-invalid");
    }

    return isValid;
  }

  render() {

    const form = document.createElement("form");
    const labelLogin = document.createElement("label");
    const emailInput = document.createElement("input");
    const labelPass = document.createElement("label");
    const passwordInput = document.createElement("input");
    const iconEye = document.createElement("i");
    const submitButton = document.createElement("button");

    form.id = "login-form";
    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Ваша пошта";
    emailInput.required = true;

    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.placeholder = "Ваш пароль";
    passwordInput.required = true;

    labelLogin.classList.add("input-wrapper");
    labelPass.classList.add("input-wrapper");
    iconEye.classList.add("bi", "bi-eye-fill");

    submitButton.type = "submit";
    submitButton.id="sing-in";
    submitButton.textContent = "Вхід";

    labelPass.append(passwordInput, iconEye);
    labelLogin.append(emailInput);

    form.addEventListener("submit", this.handleSubmit.bind(this));
    form.addEventListener("click", this.showPassword.bind(this));

    form.append(labelLogin, labelPass, submitButton);

    return form;
  }
}

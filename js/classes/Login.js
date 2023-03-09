import logIn from "../api/api.js";
import { setTokenToLocalStorage } from "../api/api.js";

export default class Login {
  constructor() {}

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
    const emailInput = document.createElement("input");
    const passwordInput = document.createElement("input");
    const submitButton = document.createElement("button");

    emailInput.type = "email";
    emailInput.id = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;

    passwordInput.type = "password";
    passwordInput.id = "password";
    passwordInput.placeholder = "Password";
    passwordInput.required = true;

    submitButton.type = "submit";
    submitButton.textContent = "Log in";

    form.addEventListener("submit", this.handleSubmit.bind(this));

    form.append(emailInput, passwordInput, submitButton);

    return form;
  }
}

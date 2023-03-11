import logIn from "../api/api.js";
import { setTokenToLocalStorage } from "../api/api.js";
import { getAllCards } from "../api/api.js";
import { getCardsFunc } from "../functional/functional.js";

export default class Login {
  constructor() {}

  async handleSubmit(event) {
    event.preventDefault();
    const btnLoad = document.querySelector("#sing-in");
    btnLoad.innerHTML = "Завантаження...";
    if (!this.validate(event.currentTarget)) {
      return;
    }
    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      const token = await logIn(email, password);
      if (token) {
        btnLoad.innerHTML = "Вхід";
        setTokenToLocalStorage(token);
        getCardsFunc(await getAllCards(token));
        ////////////////delete modal
        document.querySelector(".modal-overlay").remove();
        ////////////////
      }
    } catch (error) {
      ////////////////delete modal
      btnLoad.innerHTML = "Вхід";
      document.querySelector(".modal-overlay").remove();
      ////////////////
      alert("Невірно введені дані, спробуйте ще раз");
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
    const submitButton = document.createElement("button");

    form.id = "login-form";

    form.insertAdjacentHTML(
      "beforeend",
      `<label class="input-wrapper">
        <input type="email" id="email" placeholder="Ваша пошта" required="">
      </label>
      <label class="input-wrapper">
        <input type="password" id="password" placeholder="Ваш пароль" required="">
        <i class="bi bi-eye-fill"></i>
      </label>`
    );

    submitButton.type = "submit";
    submitButton.id = "sing-in";
    submitButton.textContent = "Вхід";

    form.addEventListener("submit", this.handleSubmit.bind(this));
    form.addEventListener("click", this.showPassword.bind(this));

    form.append(submitButton);

    return form;
  }
}

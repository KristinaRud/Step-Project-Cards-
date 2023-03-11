import { handleSubmit } from "../functional/functional.js";

export default class Login {
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

    form.addEventListener("submit", handleSubmit.bind(this));
   
    form.addEventListener("click", this.showPassword.bind(this));
    form.removeEventListener("click", this.showPassword.bind(this));

    form.append(submitButton);

    return form;
  }
}

import AuthToken from "./AuthToken.js";
import LoginModal from "./LoginModal.js";

export default class LoginButton {

    static updateButton() {

        const btn = document.querySelector(".btn-autorize");

        const title = document.querySelector(".title-auth");

        const authToken = AuthToken.getAuthTokenFromStorage();
        if (authToken) {
           title.innerText="Створити візит";
           btn.removeEventListener('click', this.#openLoginWindow);
           btn.addEventListener('click', this.#openCreateVisitWindow);

        } else {
            title.innerText="Особистий кабінет";
            btn.removeEventListener('click', this.#openCreateVisitWindow);
            btn.addEventListener('click', this.#openLoginWindow);
        }
    }

    static #openLoginWindow(){
        const root = document.querySelector(".container");

        if (!document.querySelector(".wrapper-login")) {
            const modalLogin = new LoginModal().render();
            root.appendChild(modalLogin);
        }
    }

    static #openCreateVisitWindow() {

    }
}


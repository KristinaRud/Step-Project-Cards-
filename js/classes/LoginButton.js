import LoginModal from "./LoginModal.js";
import Modal from "./Modal.js";
import { token } from "./Api.js";

export default class LoginButton {

    static updateButton() {

        const btnLogin = document.querySelector(".btn-autorize");
        const btnCreateVisit = document.querySelector(".btn-create");

        btnLogin.addEventListener('click', this.#openLoginWindow);
        btnCreateVisit.addEventListener('click', this.#openCreateVisitWindow);

        if (token) {
            btnLogin.classList.add('hide');
            btnCreateVisit.classList.remove('hide')
            

        } else {
            btnLogin.classList.remove('hide');
            btnCreateVisit.classList.add('hide')
        }
    }

    static #openLoginWindow() {
        const root = document.querySelector(".container");

        if (!document.querySelector(".wrapper-login")) {
            const modalLogin = new LoginModal().render();
            root.appendChild(modalLogin);
        }
    }

    static #openCreateVisitWindow() {
        const root = document.querySelector(".container");
        console.log("call");
        if (!document.querySelector(".visit__wrapper")) {
            const createVisitModule = new Modal().render();
            console.log(createVisitModule);
            root.appendChild(createVisitModule);
        }

    }
}


import LoginModal from "./LoginModal.js";
import Modal from "./Modal.js";
import {token} from "./Api.js";
import {root} from "../constants.js";

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
        if (!document.querySelector(".wrapper-login")) {
            const modalLogin = new LoginModal().render();
            root.appendChild(modalLogin);
        }
    }

    static #openCreateVisitWindow() {
        if (!document.querySelector(".visit__wrapper")) {
            const createVisitModule = new Modal().render();
            root.appendChild(createVisitModule);
        }

    }
}


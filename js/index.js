import LoginButton from "./classes/LoginButton.js";
import {setToken} from "./classes/Api.js";
import Utils from "./classes/Utils.js";

//logIn('kristina.rud5@gmail.com', '123456');

const formFilter = document.querySelector(".form-filter");

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("authToken")) {
        setToken(localStorage.getItem("authToken"));
    }
    LoginButton.updateButton();

    //рендер карточек визита
    new Utils().showAllCards();

})


formFilter.addEventListener('submit', (e) => {
    Utils.filterCards(e, formFilter);
})

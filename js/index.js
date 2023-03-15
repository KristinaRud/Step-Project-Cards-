import LoginButton from "./classes/LoginButton.js";
import { setToken } from "./classes/Api.js";
import Utils from "./classes/Utils.js";

//logIn('kristina.rud5@gmail.com', '123456');

//createCard(dataObj, '235ab8bf-e8e7-4ac9-ba7e-49b864771ddc');

document.addEventListener("DOMContentLoaded", () => {
   if(localStorage.getItem("authToken")){
      setToken(localStorage.getItem("authToken"));
   }
   LoginButton.updateButton();

   //рендер карточек визита
   new Utils().showAllCards();
})





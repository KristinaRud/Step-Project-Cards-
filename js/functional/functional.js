import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import Modal from "../classes/Modal.js";
import LoginModal from "../classes/LoginModal.js";
import AuthToken from "../classes/AuthToken.js";

export function getCardsFunc(data) {
  data.forEach((appointment) => {
    switch (appointment.doctor) {
      case "Кардіолог":
        new VisitCardiologist(appointment).render(document.querySelector(".visit__list"));
        break;
      case "Стоматолог":
        new VisitDentist(appointment).render(document.querySelector(".visit__list"));
        break;
      case "Терапевт":
        new VisitTherapist(appointment).render(document.querySelector(".visit__list"));
        break;
    }
  });
}

function removeModalLogin(){
    const modalLogin=document.querySelector(".modal-overlay");
    if(modalLogin){
        modalLogin.remove();
    }
}

  export function btnLogIn(){
    const root = document.querySelector(".container");
    if (document.querySelector(".wrapper-login")) {

    } else {
        const modalLogin = new LoginModal().render();
        root.appendChild(modalLogin);
    }

    const modalOverlay = document.querySelector(".modal-overlay");
    ///доработать модалку
    //modalOverlay.style.display = "flex";
   // console.log(root);
  }

  function alertEvent(){
    alert('create');
  }


  export function changedBtnAuth(btn, title){

        const authToken = AuthToken.getAuthTokenFromStorage();
        if (authToken) {
            title.innerText="Створити візит";
            btn.removeEventListener('click', btnLogIn);
            btn.addEventListener('click', alertEvent);
            removeModalLogin();

        } else {
            title.innerText="Особистий кабінет";
            btn.removeEventListener('click', alertEvent);
            btn.addEventListener('click', () => {
                btnLogIn();
            });
        }
}
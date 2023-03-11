import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";
import logIn, {setTokenToLocalStorage, getTokenFromLocalStorage, getAllCards } from "../api/api.js";
import Modal from "../classes/Modal.js";
import Login from "../classes/Login.js";

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

export async function handleSubmit(event) {
    const btnLoad = document.querySelector("#sing-in");
    const btn=document.querySelector('.btn-autorize');
    const title = document.querySelector('.title-auth');
    event.preventDefault();
    
    btnLoad.innerHTML = "Завантаження...";

    const email = event.currentTarget.email.value;
    const password = event.currentTarget.password.value;

    try {
      const token = await logIn(email, password);
      if (token) {
        btnLoad.innerHTML = "Вхід";
        setTokenToLocalStorage(token);
        getCardsFunc( await getAllCards(token));
        ////////////////delete modal
        removeModalLogin();
        changedBtnAuth(btn, title);
        ////////////////
      }
    } catch (error) {
      ////////////////delete modal
      btnLoad.innerHTML = "Вхід";
      removeModalLogin();
      ////////////////
      alert("Невірно введені дані, спробуйте ще раз");
    }
  }


  export function btnLogIn(){
    const root = document.querySelector(".container");
    const modalLogin = new Modal().render(new Login().render());
    root.appendChild(modalLogin);

    const modalOverlay = document.querySelector(".modal-overlay");
    ///доработать модалку
    modalOverlay.style.display = "flex";
    console.log(root);
  }

  function alertEvent(){
    alert('create');
  }


  export function changedBtnAuth(btn, title){
    if(getTokenFromLocalStorage()){
        title.innerText="Створити візит";
        btn.removeEventListener('click', btnLogIn);
        btn.addEventListener('click', alertEvent);
        removeModalLogin();

    }else{
        title.innerText="Особистий кабінет";
        btn.removeEventListener('click', alertEvent);
        btn.addEventListener('click', btnLogIn);
        
    }
}
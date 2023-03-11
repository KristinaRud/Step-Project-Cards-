import Visit, { data1, data2, data3 } from "./classes/Visit.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitTherapist from "./classes/VisitTherapist.js";
import Login from "./classes/Login.js";
import Modal from "./classes/Modal.js";


const visit = new VisitDentist(data1);
const visit2 = new VisitCardiologist(data2);
const visit3 = new VisitTherapist(data3)
visit.render(document.querySelector('.visit__list'));
visit2.render(document.querySelector('.visit__list'));
visit3.render(document.querySelector('.visit__list'));

//logIn('kristina.rud5@gmail.com', '123456');

const root = document.querySelector(".container");

//createCard(dataObj, '235ab8bf-e8e7-4ac9-ba7e-49b864771ddc');

const loginBtn = document.querySelector(".btn-autorize");

loginBtn.addEventListener("click", () => {
    const modalLogin = new Modal().render(new Login().render());
    root.appendChild(modalLogin);

    const modalOverlay = document.querySelector(".modal-overlay");
    ///доработать модалку
    modalOverlay.style.display = "flex";
    console.log(root);
});






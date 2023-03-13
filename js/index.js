import Visit, { data1, data2, data3 } from "./classes/Visit.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitTherapist from "./classes/VisitTherapist.js";
import LoginButton from "./classes/LoginButton.js";
import Modal from "./classes/Modal.js";
import AuthToken from "./classes/AuthToken.js";
import Api from "./classes/Api.js";


const visit = new VisitDentist(data1);
const visit2 = new VisitCardiologist(data2);
const visit3 = new VisitTherapist(data3)
visit.render(document.querySelector('.visit__list'));
visit2.render(document.querySelector('.visit__list'));
visit3.render(document.querySelector('.visit__list'));

//logIn('kristina.rud5@gmail.com', '123456');

//createCard(dataObj, '235ab8bf-e8e7-4ac9-ba7e-49b864771ddc');

// loginBtn.addEventListener("click", btnLogIn(root));

const root = document.querySelector(".container");


document.addEventListener("DOMContentLoaded", () => {
   LoginButton.updateButton();

   //Получаем список карточек в консоль
   Api.getAllCards(AuthToken.getAuthTokenFromStorage()).then(res=>console.log(res));
   
})


const listContainer = document.querySelector(".visit__list");
//  .forEach((appointment) => {
// console.log(appointment)
// switch (appointment.doctor) {
//    case "Кардіолог":
//       new VisitCardiologist(appointment).render(listContainer);
//       break;
//    case "Стоматолог":
//       new VisitDentist(appointment).render(listContainer);
//       break;
//    case "Терапевт":
//       new VisitTherapist(appointment).render(listContainer);
//       break;
// }
// });

//console.log((async () => { await Api.sendLogin('kristina.rud5@gmail.com', '123456'); })());





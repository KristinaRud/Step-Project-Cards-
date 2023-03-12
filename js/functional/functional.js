import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";


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

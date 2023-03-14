import Api from "./classes/Api.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitTherapist from "./classes/VisitTherapist.js";
import { token } from "./classes/Api.js";

export const renderCards = () => {
  const listContainer = document.querySelector(".visit__list");
  const wrapperPlaceholder = document.querySelector(".wrapper-placeholder");
  if (token) {
    if (listContainer.childNodes.length) {
      wrapperPlaceholder.remove();
    }
    Api.getAllCards().then((data) => {
      data.forEach((appointment) => {
        switch (appointment.doctor) {
          case "Кардіолог":
            new VisitCardiologist(appointment).render(listContainer);
            break;
          case "Стоматолог":
            new VisitDentist(appointment).render(listContainer);
            break;
          case "Терапевт":
            new VisitTherapist(appointment).render(listContainer);
            break;
        }
      });
    });
  }
};

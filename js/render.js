import AuthToken from "./classes/AuthToken.js";
import Api from "./classes/Api.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitTherapist from "./classes/VisitTherapist.js";

export const renderCards = () => {
  const listContainer = document.querySelector(".visit__list");
  const wrapperPlaceholder = document.querySelector(".wrapper-placeholder");
  if (AuthToken.getAuthTokenFromStorage()) {
    if (listContainer.childNodes.length) {
      wrapperPlaceholder.remove();
    }
    Api.getAllCards(AuthToken.getAuthTokenFromStorage()).then((data) => {
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

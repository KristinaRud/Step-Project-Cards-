import VisitCardiologist from "../classes/VisitCardiologist.js";
import VisitDentist from "../classes/VisitDentist.js";
import VisitTherapist from "../classes/VisitTherapist.js";

export function getCardsFunc(data) {
  data.forEach((appointment) => {
    switch (appointment.doctor) {
      case "Cardiologist":
        new VisitCardiologist(appointment).render(appointment.querySelector(".visit__list"));
        break;
      case "Dentist":
        new VisitDentist(appointment).render(appointment.querySelector(".visit__list"));
        break;
      case "Therapist":
        new VisitTherapist(appointment).render(appointment.querySelector(".visit__list"));
        break;
    }
  });
}

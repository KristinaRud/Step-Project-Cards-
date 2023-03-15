import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import Api, {token} from "./Api.js";

export default class Utils {
    constructor() {
        this.listContainer = document.querySelector(".visit__list");
        this.wrapperPlaceholder = document.querySelector(".wrapper-placeholder");
    }

     showAllCards() {
                if (token) {
            if (this.listContainer.childNodes.length) {
                this.wrapperPlaceholder.remove();
            }
            Api.getAllCards().then((data) => {
                data.forEach((appointment) => {
                    this.chooseRenderDoctor(appointment)
                });
            });
        }
    }



     chooseRenderDoctor(data) {
        switch (data.doctor) {
            case "Кардіолог":
                new VisitCardiologist(data).render(this.listContainer);
                break;
            case "Стоматолог":
                new VisitDentist(data).render(this.listContainer);
                break;
            case "Терапевт":
                new VisitTherapist(data).render(this.listContainer);
                break;
        }
    }
}
import Visit from "./Visit.js";

export default class VisitTherapist extends Visit {
    constructor({age, fullName, doctor, purpose, description, urgency, id, date}) {
        super({fullName, doctor, purpose, description, urgency, id, date});
        this.age = age;
    }

    render(container) {
        super.render(container);
        this.imgVisit.src = "https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Flandings%2F%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B8%D1%8F%2F%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D1%96%D1%8F_%D0%B7%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%BD%D0%B4%D1%96%D0%BD%D0%B3%2F%2Fterapia.gif%3Fv%3Dt"
        this.infoVisit.innerHTML +=`<p class="age">Вік: ${this.age}.</p>`
        super.showMoreLess();
        super.changeStatusDone(this.date);
    }
    
}
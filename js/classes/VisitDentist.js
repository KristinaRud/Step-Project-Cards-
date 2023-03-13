import Visit from "./Visit.js";

export default class VisitDentist extends Visit {
    constructor({date, name, doctor, goal, description, drop, id}) {
        super({name, doctor, goal, description, drop, id});
        this.date = date;
    }

    render(container) {
        super.render(container);
        this.imgVisit.setAttribute('src', 'https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Flandings%2F%D0%A1%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F%2FStomatologia.gif%3Fv%3D')
        super.showMoreLess(`<p class="text__dentist">
                                        Дата останнього відвідування: ${this.date}. <br></p>`)
    }
}
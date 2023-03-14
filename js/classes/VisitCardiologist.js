import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit{
    constructor({index, pressure, diseases, age, fullName, doctor, purpose, description, urgency, id}) {
        super({fullName, doctor, purpose, description, urgency, id});
        this.index = index;
        this.pressure = pressure;
        this.diseases = diseases;
        this.age = age;
    }

    render(container) {
        super.render(container);
        this.imgVisit.src = "https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Fhome.jpg%3Fv%3Dt&quot"
        super.showMoreLess(`<p class="text__cardiologist"> Звичайний тиск: ${this.pressure}. <br>
                                      Індекс маси тіла: ${this.index}. <br>
                                        Перенесені захворювання серцево-судинної системи: ${this.diseases}. <br>
                                        Вік: ${this.age}. <br>
                                    </p>`)
    }
}
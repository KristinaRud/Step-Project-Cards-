import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit{
    constructor({bms, pressure, heart, age, name, doctor, goal, description, drop}) {
        super({name, doctor, goal, description, drop});
        this.bms = bms;
        this.pressure = pressure;
        this.heart = heart;
        this.age = age;
    }

    render(container) {
        super.render(container);
        this.imgVisit.src = "https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Fhome.jpg%3Fv%3Dt&quot"
        super.showMoreLess(`<p class="text__cardiologist"> Звичайний тиск: ${this.pressure}. <br>
                                      Індекс маси тіла: ${this.bms}. <br>
                                        Перенесені захворювання серцево-судинної системи: ${this.heart}. <br>
                                        Вік: ${this.age}. <br>
                                    </p>`)
    }
}
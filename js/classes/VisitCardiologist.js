import Visit from "./Visit.js";

export default class VisitCardiologist extends Visit{
    constructor({index, pressure, diseases, age, fullName, doctor, purpose, description, urgency, id, date}) {
        super({fullName, doctor, purpose, description, urgency, id, date});
        this.index = index;
        this.pressure = pressure;
        this.diseases = diseases;
        this.age = age;
    }

    render() {
        super.render();
        this.imgVisit.src = "https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Fhome.jpg%3Fv%3Dt&quot"
        this.infoVisit.innerHTML += `<p class="pressure"> Звичайний тиск: ${this.pressure}.
                                     <p class="index"> Індекс маси тіла: ${this.index}. </p>
                                      <p class="diseases"> Перенесені захворювання CCC: ${this.diseases}. </p>
                                       <p class="age"> Вік: ${this.age}. </p>`
        return this.li;
    }
}
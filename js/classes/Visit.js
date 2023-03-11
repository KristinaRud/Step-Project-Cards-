export default class Visit {
    constructor({name, doctor, goal, description, drop}) {
        this.name = name;
        this.doctor = doctor;
        this.goal = goal;
        this.description = description;
        this.drop = drop;
        this.template = document.querySelector(".visit").content;
        this.liTemplate = this.template.querySelector('li');
        this.li = this.liTemplate.cloneNode(true);
        this.infoVisit = this.li.querySelector('.text-wrapper');
        this.imgVisit = this.li.querySelector('.visit__img');
    }

    render(container) {
            const nameVisit = this.li.querySelector('.visit__title');
            nameVisit.textContent = this.name;

            const doctorVisit = this.li.querySelector('.visit__text-doctor');
            doctorVisit.textContent = this.doctor;

            container.prepend(this.li)
            return this.li;

     }
    showMoreLess (textExtends='') {
        const btnMoreLess = this.li.querySelector('.visit-btn');
        btnMoreLess.addEventListener('click', ()=>{
            if (this.infoVisit.innerText === ''){
                btnMoreLess.textContent = 'Приховати';
                this.infoVisit.insertAdjacentHTML('beforeend',  `<p class="text__total">
                                   Мета: ${this.goal} . <br>
                                   Короткий опис: ${this.description}.<br>
                                   Терміновість: ${this.drop}.<br>
                                   </p>  ${textExtends}`);
            } else {
                btnMoreLess.textContent = 'Показати більше';
                this.infoVisit.textContent =''
            }})
    }
}
export const data1 = {
    name: "Оксана Земляна",
    doctor: "Стоматолог",
    goal: "Огляд",
    description: "Болить зуб",
    drop: "Терміново",
    age: 25,
    bms: 20,
    pressure: 80-120,
    heart: 'немає',
    date: "11/12/2022"
}
export const data2 = {
    name: "Кристина Рудь",
    doctor: "Кардіолог",
    goal: "Огляд",
    description: "Високе серцебиття",
    drop: "Не терміново",
    age: 30,
    bms: 20,
    pressure: 80-120,
    heart: 'немає',
    date: "11/12/2022"
}

export const data3 = {
    name: "Данил Денк",
    doctor: "Терапевт",
    goal: "Огляд",
    description: "Планове",
    drop: "Не терміново",
    age: 30,
    bms: 20,
    pressure: 80-120,
    heart: 'немає',
    date: "11/12/2022"
}



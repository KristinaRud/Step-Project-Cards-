import Api from "./Api.js";

export default class Visit {
    constructor({fullName, doctor, purpose, description, urgency, id}) {
        this.fullName = fullName;
        this.doctor = doctor;
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.id = id;
        this.template = document.querySelector(".visit").content;
        this.liTemplate = this.template.querySelector('li');
        this.li = this.liTemplate.cloneNode(true);
        this.infoVisit = this.li.querySelector('.text-wrapper');
        this.imgVisit = this.li.querySelector('.visit__img');
        this.btnClose = this.li.querySelector('#btn-close');
    }

    render(container) {
        const nameVisit = this.li.querySelector('.visit__title');
        nameVisit.textContent = this.fullName;

        const doctorVisit = this.li.querySelector('.visit__text-doctor');
        doctorVisit.textContent = this.doctor;

        container.prepend(this.li)
        this.btnClose.addEventListener('click', () => this.delete());

        return this.li;

    }

    showMoreLess(textExtends = '') {
        const btnMoreLess = this.li.querySelector('.visit-btn');
        btnMoreLess.addEventListener('click', () => {
            if (this.infoVisit.innerText === '') {
                btnMoreLess.textContent = 'Приховати';
                this.infoVisit.insertAdjacentHTML('beforeend', `<p class="text__total">
                                   Мета: ${this.purpose} . <br>
                                   Короткий опис: ${this.description}.<br>
                                   Терміновість: ${this.urgency}.<br>
                                   </p>  ${textExtends}`);
            } else {
                btnMoreLess.textContent = 'Показати більше';
                this.infoVisit.textContent = ''
            }
        })
    }

    edit() {

    }

    delete() {
        //console.log(this.li);
        Api.deleteCard(this.id).then((res) => {
            console.log(res);
            if (res.ok) {
                this.li.remove();
            }
        })
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
    pressure: 80 - 120,
    heart: 'немає',
    date: "11/12/2022",
    id: 1,
}
export const data2 = {
    name: "Кристина Рудь",
    doctor: "Кардіолог",
    goal: "Огляд",
    description: "Високе серцебиття",
    drop: "Не терміново",
    age: 30,
    bms: 20,
    pressure: 80 - 120,
    heart: 'немає',
    date: "11/12/2022",
    id: 2,
}

export const data3 = {
    name: "Данил Денк",
    doctor: "Терапевт",
    goal: "Огляд",
    description: "Планове",
    drop: "Не терміново",
    age: 30,
    bms: 20,
    pressure: 80 - 120,
    heart: 'немає',
    date: "11/12/2022",
    id: 3,
}



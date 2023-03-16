import Api from "./Api.js";
import Modal from "./Modal.js";
import {root} from "../constants.js";

export default class Visit {
    constructor({fullName, doctor, purpose, description, urgency, id, date}) {
        this.fullName = fullName;
        this.doctor = doctor;
        this.purpose = purpose;
        this.description = description;
        this.urgency = urgency;
        this.id = id;
        this.date = date;
        this.template = document.querySelector(".visit").content;
        this.liTemplate = this.template.querySelector('li');
        this.li = this.liTemplate.cloneNode(true);
        this.infoVisit = this.li.querySelector('.text-wrapper');
        this.imgVisit = this.li.querySelector('.visit__img');
        this.btnClose = this.li.querySelector('#btn-close');
        this.btnEdit = this.li.querySelector('#btn-edit');
        this.iconDone = this.li.querySelector(".icon-done");
        this.btnMoreLess = this.li.querySelector('.visit-btn');

    }

    render(container) {
        const dateCurrent = new Date().toLocaleDateString();
        this.li.dataset.id = this.id;
        const nameVisit = this.li.querySelector('.visit__title');
        nameVisit.textContent = this.fullName;

        const doctorVisit = this.li.querySelector('.visit__text-doctor');
        doctorVisit.textContent = this.doctor;

        container.prepend(this.li)
        this.btnClose.addEventListener('click', () => this.delete());

        this.btnEdit.addEventListener('click', ()=> {
            const modalForm = new Modal()
            Api.getCard(this.id).then((data)=>    {
                root.append(modalForm.render(this.id,data));
                modalForm.createButton.textContent = "Редагувати";
            })

        });

        if (this.date < dateCurrent) {
            nameVisit.style.color = '#15a415';
            this.li.dataset.status = "done";
            this.imgVisit.classList.add('active');
            this.iconDone.style.display = "block";
            this.li.style.border = "1px solid rgba(21, 164, 21, 20%)"
        }

        return this.li;

    }

    showMoreLess(textExtends = '') {

        this.btnMoreLess.addEventListener('click', () => {
            if (this.infoVisit.innerText === '') {
                this.btnMoreLess.textContent = 'Приховати';
                this.infoVisit.insertAdjacentHTML('beforeend', `<p class="text__total">
                                   Мета: ${this.purpose} . <br>
                                   Короткий опис: ${this.description}.<br>
                                   Терміновість: ${this.urgency}.<br>
                                   </p>  ${textExtends}`);
            } else {
                this.btnMoreLess.textContent = 'Показати більше';
                this.infoVisit.textContent = ''
            }
        })
    }

edit(visit) {

     //   const liId = this.li.querySelector(`[data-id="${visit.id}"]`);
     // console.log(this.li)
        const arrayVisit = [...this.li.querySelectorAll("h3, p")];

           const visitData = Object.entries(visit);

        arrayVisit.forEach((el => {
            const dataObj = visitData.find(([name]) => el.className === name);
            el.textContent = dataObj[1];
        }));
     console.log(visitData)

    }

    delete() {
        Api.deleteCard(this.id).then((res) => {
            if (res.ok) {
                this.li.remove();
            }
        })
    }
}
export const data1 = {
    fullName: "Оксана Земляна",
    doctor: "Стоматолог",
    purpose: "Огляд",
    description: "Болить зуб",
    urgency: "Терміново",
    date: '15.03.2023',
    age: 25,
    index: 20,
    pressure: 80 - 120,
    diseases: 'немає',
    lastDate: "11/12/2022",
    // id: 1,
}
export const data2 = {
    fullName: "Кристина Рудь",
    doctor: "Кардіолог",
    purpose: "Огляд",
    description: "Високе серцебиття",
    urgency: "Не терміново",
    date: '14.03.2023',
    age: 30,
    index: 20,
    pressure: 80 - 120,
    diseases: 'немає',
    lastDate: "11/12/2022",
    // id: 2,
}
export const data3 = {
    fullName: "Иван Иван",
    doctor: "Терапевт",
    purpose: "Огляд",
    description: "Високе серцебиття",
    urgency: "Не терміново",
    date: '16.03.2023',
    age: 30,
    index: 20,
    pressure: 80 - 120,
    diseases: 'немає',
    lastDate: "11/12/2022",
    // id: 2,
}



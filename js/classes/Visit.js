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

        this.li.dataset.urgency=this.urgency;
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


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

        this.infoVisit.innerHTML = `<p class="text__total purpose">Мета: ${this.purpose}.</p> 
                                  <p class="text__total description">Короткий опис: ${this.description}.</p>
                                  <span><p class="text__total urgency">Терміновість: ${this.urgency}.</p></span>`


        this.btnClose.addEventListener('click', () => this.delete());




        this.btnEdit.addEventListener('click', () => {
            const modalForm = new Modal();
           Api.getCard(this.id).then((data) => {
                root.append(modalForm.render(this.id, data));
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
        container.prepend(this.li)
        return this.li;

    }

    showMoreLess() {

        this.btnMoreLess.addEventListener('click', () => {
            if (this.infoVisit.hidden) {
                this.btnMoreLess.textContent = 'Приховати';
                this.infoVisit.hidden = false;

            } else {
                this.btnMoreLess.textContent = 'Показати більше';
                this.infoVisit.hidden = true;
            }
        })
    }

   edit({doctor}) {
        const textName = this.li.querySelector("p");
        textName.textContent = doctor;
        // const visitData = Object.entries(visit);
        // const name = visitData[[0]].split();
        // console.log(name)
        // arrayVisit.forEach((el => {
        //
        //     const dataObj = visitData.find(name => el.className === name);
        //     console.log(dataObj)
        //     el.textContent = dataObj[1];
        // }));
        // console.log(visitData)
    }

    delete() {
        Api.deleteCard(this.id).then((res) => {
            if (res.ok) {
                this.li.remove();
            }
        })
    }
}



import Api from "./Api.js";
import Modal from "./Modal.js";
import { root } from "../constants.js";

export default class Visit {
  age;
  date;
  description;
  diseases;
  doctor;
  fullName;
  index;
  lastDate;
  pressure;
  purpose;
  urgency;

  constructor({ fullName, doctor, purpose, description, urgency, id, date }) {
    this.fullName = fullName;
    this.doctor = doctor;
    this.purpose = purpose;
    this.description = description;
    this.urgency = urgency;
    this.id = id;
    this.date = date;
    this.template = document.querySelector(".visit").content;
    this.liTemplate = this.template.querySelector("li");
    this.li = this.liTemplate.cloneNode(true);
    this.infoVisit = this.li.querySelector(".text-wrapper");
    this.imgVisit = this.li.querySelector(".visit__img");
    this.btnClose = this.li.querySelector("#btn-close");
    this.btnEdit = this.li.querySelector("#btn-edit");
    this.iconDone = this.li.querySelector(".icon-done");
    this.btnMoreLess = this.li.querySelector(".visit-btn");
  }

  render(container) {
    const dateCurrent = new Date().toLocaleDateString();
    this.li.dataset.id = this.id;
    const nameVisit = this.li.querySelector(".visit__title");
    nameVisit.textContent = this.fullName;

    const doctorVisit = this.li.querySelector(".visit__text-doctor");
    doctorVisit.textContent = this.doctor;

    this.infoVisit.innerHTML = `<p class="text__total purpose">Мета: ${this.purpose}.</p>
                                  <p class="text__total description">Короткий опис: ${this.description}.</p>
                                 <span><p class="text__total urgency">Терміновість: ${this.urgency}.</p> </span>`;

    this.btnClose.addEventListener("click", () => this.delete());

    this.btnEdit.addEventListener("click", () => {
      const modalForm = new Modal();
      const data = {
        fullName: this.fullName,
        doctor: this.doctor,
        purpose: this.purpose,
        description: this.description,
        urgency: this.urgency,
        date: this.date,
        age: this.age,
        index: this.index,
        pressure: this.pressure,
        diseases: this.diseases,
        lastDate: this.lastDate,
      };

      const editForm = modalForm.render(this.id, data, (data) => {
        this.edit(data);
      });
      root.append(editForm);
    });

    this.li.dataset.urgency = this.urgency;

    if (this.date < dateCurrent) {
      nameVisit.style.color = "#15a415";
      this.li.dataset.status = "done";
      this.imgVisit.classList.add("active");
      this.iconDone.style.display = "block";
      this.li.style.border = "1px solid rgba(21, 164, 21, 20%)";
    }else{this.li.dataset.status = "open";}
    container.prepend(this.li);
    return this.li;
  }

  showMoreLess() {
    this.btnMoreLess.addEventListener("click", () => {
      if (this.infoVisit.hidden) {
        this.btnMoreLess.textContent = "Приховати";
        this.infoVisit.hidden = false;
      } else {
        this.btnMoreLess.textContent = "Показати більше";
        this.infoVisit.hidden = true;
      }
    });
  }

  edit(visit) {
    const arrayVisits = this.li.querySelectorAll("h3,p");
    for (let key in visit) {
      arrayVisits.forEach((el) => {
        if (el.className.includes(key)) {
          el.innerText = this.initialize(key, visit[key]);
          
        }
      });
    }
  }

  initialize(key, val) {
    if (key === "fullName") {
      this.fullName = val;
      return this.fullName;
    } else if (key === "doctor") {
      if (val === 'Кардіолог') {
            this.imgVisit.src = "https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Fhome.jpg%3Fv%3Dt&quot"
        } else if (val === 'Стоматолог'){
            this.imgVisit.setAttribute('src', 'https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Flandings%2F%D0%A1%D1%82%D0%BE%D0%BC%D0%B0%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D1%96%D1%8F%2FStomatologia.gif%3Fv%3D')
        } else if (val === 'Терапевт'){
            this.imgVisit.src = "https://res.cloudinary.com/djrrr9cpl/image/fetch/pg_1,e_outline:1,co_white/f_png,w_128,h_128/https%3A%2F%2Fportal-doctor.eleks.com%2Fapi%2Fgetfile%2Fdobrobutprodcms%2Flandings%2F%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D0%B8%D1%8F%2F%D1%82%D0%B5%D1%80%D0%B0%D0%BF%D1%96%D1%8F_%D0%B7%D0%B0%D0%B3%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9%20%D0%BB%D0%B5%D0%BD%D0%B4%D1%96%D0%BD%D0%B3%2F%2Fterapia.gif%3Fv%3Dt"
        }
      this.doctor = val;
      return this.doctor;
    } else if (key === "purpose") {
      this.purpose = val;
      return `Мета: ${this.purpose}`;
    } else if (key === "description") {
      this.description = val;
      return `Короткий опис: ${this.description}`
    } else if (key === "urgency") {
      this.urgency = val;
      return `Терміновість: ${this.urgency}`;
    } else if (key === "date") {
      this.date = val;
    } else if (key === "age") {
      this.age = val;
      return `Вік: ${this.age}`;
    } else if (key === "index") {
      this.index = val;
      return `Індекс маси тіла: ${this.index}`;
    } else if (key === "pressure") {
      this.pressure = val;
      return `Звичайний тиск: ${this.pressure}`;
    } else if (key === "diseases") {
      this.diseases = val;
      return `Перенесені захворювання CCC: ${this.diseases}`;
    } else if (key === "lastDate") {
      this.lastDate = val;
    }
  }

  delete() {
    Api.deleteCard(this.id).then((res) => {
      if (res.ok) {
        this.li.remove();
      }
    });
  }
}

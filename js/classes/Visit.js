import Api from "./Api.js";
import Modal from "./Modal.js";
import {root} from "../constants.js";
import Utils from "./Utils.js";
import {listContainer} from "../constants.js";

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

	constructor({fullName, doctor, purpose, description, urgency, id, date}) {
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
		this.dateCurrent = new Date().toLocaleDateString();
		this.nameVisit = this.li.querySelector(".visit__title");
	}

	render() {
		this.li.dataset.id = this.id;
		this.nameVisit.textContent = this.fullName;

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
		
		this.changeStatusDone(this.date);
		this.showMoreLess()
		return this.li;
	}

	changeStatusDone(dateVisit) {
		if (dateVisit < Utils.reverseDate(this.dateCurrent)) {
			this.nameVisit.classList.add('color')
			this.li.dataset.status = "done";
			this.imgVisit.classList.add("active");
			this.iconDone.style.display = "block";
			this.li.classList.add("border");
		} else {
			this.li.dataset.status = "open";
			this.nameVisit.classList.remove("color");
			this.iconDone.style.display = "none";
			this.imgVisit.classList.remove("active");
			this.li.classList.remove("border");
		}
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
		const li = new Utils().chooseRenderDoctor(visit)
		this.li.before(li)
		this.li.remove();
	}

	delete() {
		Api.deleteCard(this.id).then((res) => {
			if (res.ok) {
				this.li.remove();
			}
		});
	}
}

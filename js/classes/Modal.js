import Api from "./Api.js";
import Utils from "./Utils.js";
import Visit from "./Visit.js";

export default class Modal {
    constructor() {
        this.doctorSelect = null;
        this.fieldsContainer = null;
        this.createButton = document.createElement("button");
        this.body = null;
        this.overlay = null;
        this.onSubmit = null;
        this.onClose = null;
    }

    render(id = '' ,{ fullName = '', doctor = '', purpose = '', description = '', urgency = '', date: visitDate = '', age = '',index = '',pressure = '', diseases = '', lastDate = ''}) {
        const modalWrapper = document.createElement("div");
        modalWrapper.className = "modal-wrapper";

        const modal = document.createElement("div");
        modal.className = "modal";
        modalWrapper.appendChild(modal);

        const doctorSelectWrapper = document.createElement("div");
        doctorSelectWrapper.className = "doctor-select-wrapper";

        const doctorLabel = document.createElement("label");
        doctorLabel.innerText = "Виберіть лікаря: ";

        this.doctorSelect = document.createElement("select");
        this.doctorSelect.name = "doctor";
        this.doctorSelect.id = "doctor-select";

        const doctorLogyOption = document.createElement("option");
        doctorLogyOption.value = "Лікар";
        doctorLogyOption.text = "Лікар";

        const cardiologyOption = document.createElement("option");
        cardiologyOption.value = "Кардіолог";
        cardiologyOption.text = "Кардіолог";

        const dentistOption = document.createElement("option");
        dentistOption.value = "Стоматолог";
        dentistOption.text = "Стоматолог";

        const therapistOption = document.createElement("option");
        therapistOption.value = "Терапевт";
        therapistOption.text = "Терапевт";

        switch (doctor) {
            case cardiologyOption.text : {
                cardiologyOption.selected = true;
                break;
            }
            case dentistOption.text : {
                dentistOption.selected = true;
                break;
            }
            case therapistOption.text : {
                therapistOption.selected = true;
                break;
            }
        }

        this.doctorSelect.append(doctorLogyOption, cardiologyOption, dentistOption, therapistOption);

        doctorSelectWrapper.appendChild(doctorLabel);
        doctorSelectWrapper.appendChild(this.doctorSelect);

        this.fieldsContainer = document.createElement("div");
        this.fieldsContainer.className = "fields-container";

        const purposeLabel = document.createElement("label");
        purposeLabel.innerText = "Мета візиту: ";

        const purposeInput = document.createElement("input");
        purposeInput.type = "text";
        purposeInput.name = "purpose";
        purposeInput.value = purpose;

        const dateVisitLabel = document.createElement("label");
        dateVisitLabel.innerText = "Дата візиту: ";

        const dateVisitInput = document.createElement("input");
        dateVisitInput.type = "date";
        dateVisitInput.name = "date";
        dateVisitInput.value = visitDate;

        const descriptionLabel = document.createElement("label");
        descriptionLabel.innerText = "Короткий опис: ";

        const descriptionInput = document.createElement("textarea");
        descriptionInput.name = "description";
        descriptionInput.value = description;

        const urgencyLabel = document.createElement("label");
        urgencyLabel.innerText = "Терміновість: ";

        const urgencySelect = document.createElement("select");
        urgencySelect.name = "urgency";
        urgencySelect.id = "urgency-select";

        const normalOption = document.createElement("option");
        normalOption.value = "Звичайний";
        normalOption.text = "Звичайний";

        const priorityOption = document.createElement("option");
        priorityOption.value = "Пріорітетний";
        priorityOption.text = "Пріорітетний";

        const emergencyOption = document.createElement("option");
        emergencyOption.value = "Невідкладний";
        emergencyOption.text = "Невідкладний";

        switch (urgency) {
            case normalOption.text: {
                normalOption.selected = true;
                break;
            }
            case priorityOption.text: {
                priorityOption.selected = true;
                break;
            }
            case emergencyOption.text: {
                emergencyOption.selected = true;
                break;
            }
        }

        urgencySelect.appendChild(normalOption);
        urgencySelect.appendChild(priorityOption);
        urgencySelect.appendChild(emergencyOption);

        const fullNameLabel = document.createElement("label");
        fullNameLabel.innerText = "ПІБ: ";

        const fullNameInput = document.createElement("input");
        fullNameInput.type = "text";
        fullNameInput.name = "fullName";
        fullNameInput.value = fullName;

        this.fieldsContainer.appendChild(purposeLabel);
        this.fieldsContainer.appendChild(purposeInput);
        this.fieldsContainer.appendChild(fullNameLabel);
        this.fieldsContainer.appendChild(fullNameInput);
        this.fieldsContainer.appendChild(descriptionLabel);
        this.fieldsContainer.appendChild(descriptionInput);
        this.fieldsContainer.appendChild(dateVisitLabel);
        this.fieldsContainer.appendChild(dateVisitInput);
        this.fieldsContainer.appendChild(urgencyLabel);
        this.fieldsContainer.appendChild(urgencySelect);


        modal.appendChild(doctorSelectWrapper);

        const specDiv = document.createElement("div");
        specDiv.className = "doctor-specific-wrapper";

        if (doctor !== "") {
            switch (doctor) {
                case dentistOption.text: {
                    const lastVisitDateLabel = document.createElement("label");
                    lastVisitDateLabel.innerText = "Дата останнього візиту:";
                    const date = document.createElement("input");
                    date.type = "date";
                    date.name = "lastDate"
                    date.value = lastDate;
                    specDiv.appendChild(lastVisitDateLabel);
                    specDiv.appendChild(date);
                    doctorSelectWrapper.appendChild(this.fieldsContainer);
                    doctorSelectWrapper.appendChild(specDiv);

                    break;
                }
                case therapistOption.text: {
                    const ageLabel = document.createElement("label");
                    ageLabel.innerText = "Вік:";
                    const ageInput = document.createElement("input");
                    ageInput.type = "number";
                    ageInput.name = "age";
                    ageInput.value = age;
                    specDiv.append(ageLabel, ageInput);
                    doctorSelectWrapper.appendChild(this.fieldsContainer);
                    doctorSelectWrapper.appendChild(specDiv);
                    break;
                }
                case cardiologyOption.text: {
                    const pressureLabel = document.createElement("label");
                    pressureLabel.innerText = "Звичайний тиск";
                    const pressureInput = document.createElement("input");
                    pressureInput.type = "number";
                    pressureInput.name = "pressure";
                    pressureInput.value = pressure;
                    const indexLabel = document.createElement("label");
                    indexLabel.innerText = "Індекс маси тіла:";
                    const indexInput = document.createElement("input");
                    indexInput.type = "number";
                    indexInput.name = "index";
                    indexInput.value = index;
                    const diseasesLabel = document.createElement("label");
                    diseasesLabel.innerText = "Перенесені захворювання ССС: ";

                    const diseasesInput = document.createElement("textarea");
                    diseasesInput.name = "diseases";
                    diseasesInput.value = diseases;

                    const ageLabel = document.createElement("label");
                    ageLabel.innerText = "Вік:";
                    const ageInput = document.createElement("input");
                    ageInput.type = "number";
                    ageInput.name = "age";
                    ageInput.value = age;
                    specDiv.append(pressureLabel, pressureInput, indexLabel, indexInput, diseasesLabel, diseasesInput, ageLabel, ageInput);


                    doctorSelectWrapper.appendChild(this.fieldsContainer);
                    doctorSelectWrapper.appendChild(specDiv);
                }
            }
        }

            doctorSelectWrapper.addEventListener("change", ({target}) => {
                const doctorTarget = target.value;

                if (target.matches('#doctor-select')) {
                    specDiv.innerHTML = ""
                    switch (doctorTarget) {
                        case "Стоматолог": {
                            const lastVisitDateLabel = document.createElement("label");
                            lastVisitDateLabel.innerText = "Дата останнього візиту:";
                            const date = document.createElement("input");
                            date.type = "date";
                            date.name = "lastDate"
                            specDiv.appendChild(lastVisitDateLabel);
                            specDiv.appendChild(date);
                            doctorSelectWrapper.appendChild(this.fieldsContainer);
                            doctorSelectWrapper.appendChild(specDiv);

                            break;
                        }
                        case "Терапевт": {
                            const ageLabel = document.createElement("label");
                            ageLabel.innerText = "Вік:";
                            const ageInput = document.createElement("input");
                            ageInput.type = "number";
                            ageInput.name = "age";
                            specDiv.append(ageLabel, ageInput);
                            doctorSelectWrapper.appendChild(this.fieldsContainer);
                            doctorSelectWrapper.appendChild(specDiv);
                            break;
                        }
                        case "Кардіолог": {
                            const pressureLabel = document.createElement("label");
                            pressureLabel.innerText = "Звичайний тиск";
                            const pressureInput = document.createElement("input");
                            pressureInput.type = "number";
                            pressureInput.name = "pressure";
                            pressureInput.value = pressure;
                            const indexLabel = document.createElement("label");
                            indexLabel.innerText = "Індекс маси тіла:";
                            const indexInput = document.createElement("input");
                            indexInput.type = "number";
                            indexInput.name = "index";
                            const diseasesLabel = document.createElement("label");
                            diseasesLabel.innerText = "Перенесені захворювання ССС: ";

                            const diseasesInput = document.createElement("textarea");
                            diseasesInput.name = "diseases";

                            const ageLabel = document.createElement("label");
                            ageLabel.innerText = "Вік:";
                            const ageInput = document.createElement("input");
                            ageInput.type = "number";
                            ageInput.name = "age";
                            specDiv.append(pressureLabel, pressureInput, indexLabel, indexInput, diseasesLabel, diseasesInput, ageLabel, ageInput);


                            doctorSelectWrapper.appendChild(this.fieldsContainer);
                            doctorSelectWrapper.appendChild(specDiv);
                        }


                    }
                }
            })

            if (fullName !== "") {
                this.createButton.innerText = "Редагувати";
            } else {
                this.createButton.innerText = "Створити";
            }
            this.createButton.addEventListener('click', () => {
                const arrInputField = this.fieldsContainer.querySelectorAll('input,textarea');
                const arrInputSpec = specDiv.querySelectorAll('input, textarea');
                const arrInputs = [...arrInputField, ...arrInputSpec];

                this.body = {doctor: this.doctorSelect.value, urgency: urgencySelect.value};
                arrInputs.forEach((element) => {
                    this.body[element.name] = element.value
                });

                if (this.createButton.innerText === 'Створити') {
                    Api.createCard(this.body)
                        .then(data => {
                            new Utils().chooseRenderDoctor(data)
                        })

                } else if (this.createButton.innerText === 'Редагувати') {
                    Api.editCard(id, this.body).then(data => new Visit(data).edit(data));
                }
                modalWrapper.remove();
            });

            const closeBtn = document.createElement("button");
            closeBtn.innerText = "Відмінити";
            closeBtn.addEventListener('click', () => modalWrapper.remove())

            modal.appendChild(this.createButton);
            modal.appendChild(closeBtn);



            return modalWrapper;

        }

}

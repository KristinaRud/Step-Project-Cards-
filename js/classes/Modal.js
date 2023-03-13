export default class Modal {
    constructor() {
        this.doctorSelect = null;
        this.fieldsContainer = null;
        this.createButton = null;
        this.closeButton = null;
        this.overlay = null;
        this.onSubmit = null;
        this.onClose = null;
    }

    render() {
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

        const cardiologyOption = document.createElement("option");
        cardiologyOption.value = "cardiologist";
        cardiologyOption.text = "Кардіолог";

        const dentistOption = document.createElement("option");
        dentistOption.value = "dentist";
        dentistOption.text = "Стоматолог";

        const therapistOption = document.createElement("option");
        therapistOption.value = "therapist";
        therapistOption.text = "Терапевт";

        this.doctorSelect.appendChild(cardiologyOption);
        this.doctorSelect.appendChild(dentistOption);
        this.doctorSelect.appendChild(therapistOption);

        doctorSelectWrapper.appendChild(doctorLabel);
        doctorSelectWrapper.appendChild(this.doctorSelect);

        this.fieldsContainer = document.createElement("div");
        this.fieldsContainer.className = "fields-container";

        const purposeLabel = document.createElement("label");
        purposeLabel.innerText = "Мета візита: ";

        const purposeInput = document.createElement("input");
        purposeInput.type = "text";
        purposeInput.name = "purpose";

        const descriptionLabel = document.createElement("label");
        descriptionLabel.innerText = "Короткий опис: ";

        const descriptionInput = document.createElement("textarea");
        descriptionInput.name = "description";

        const urgencyLabel = document.createElement("label");
        urgencyLabel.innerText = "Терміновість: ";

        const urgencySelect = document.createElement("select");
        urgencySelect.name = "urgency";
        urgencySelect.id = "urgency-select";

        const normalOption = document.createElement("option");
        normalOption.value = "normal";
        normalOption.text = "Звичайна";

        const priorityOption = document.createElement("option");
        priorityOption.value = "priority";
        priorityOption.text = "Пріорітетна";

        const emergencyOption = document.createElement("option");
        emergencyOption.value = "emergency";
        emergencyOption.text = "Невідкладна";

        urgencySelect.appendChild(normalOption);
        urgencySelect.appendChild(priorityOption);
        urgencySelect.appendChild(emergencyOption);

        const fullNameLabel = document.createElement("label");
        fullNameLabel.innerText = "ПІБ: ";

        const fullNameInput = document.createElement("input");
        fullNameInput.type = "text";
        fullNameInput.name = "fullName";

        this.fieldsContainer.appendChild(purposeLabel);
        this.fieldsContainer.appendChild(purposeInput);
        this.fieldsContainer.appendChild(descriptionLabel);
        this.fieldsContainer.appendChild(descriptionInput);
        this.fieldsContainer.appendChild(urgencyLabel);
        this.fieldsContainer.appendChild(urgencySelect);
        this.fieldsContainer.appendChild(fullNameLabel);
        this.fieldsContainer.appendChild(fullNameInput);

        modal.appendChild(doctorSelectWrapper);

        const specDiv = document.createElement("div");
        specDiv.className = "doctor-specific-wrapper";

        doctorSelectWrapper.addEventListener("change", (event) => {
            const doctor = event.target.value;
            specDiv.innerHTML = "";



            switch (doctor) {
                case "dentist": {
                    const lastVisitDateLabel = document.createElement("label");
                    lastVisitDateLabel.innerText = "Дата останнього візиту";
                    const date = document.createElement("input");
                    date.type = "date";
                    date.name = "last visit date"
                    specDiv.appendChild(lastVisitDateLabel);
                    specDiv.appendChild(date);
                    doctorSelectWrapper.appendChild(this.fieldsContainer);
                    doctorSelectWrapper.appendChild(specDiv);

                    break;
                }
                case "therapist": {
                    const ageLabel = document.createElement("label");
                    ageLabel.innerText = "Вік";
                    const ageInput = document.createElement("input");
                    ageInput.type = "number";
                    ageInput.name = "age";
                    specDiv.appendChild(ageLabel, ageInput);
                    doctorSelectWrapper.appendChild(this.fieldsContainer);
                    doctorSelectWrapper.appendChild(specDiv);
                    break;
                }
                case "cardiologist": {
                    const pressureLabel = document.createElement("label");
                    pressureLabel.innerText = "Звичайний тиск";
                    const pressureInput = document.createElement("input");
                    pressureInput.type = "number";
                    pressureInput.name = "pressure";
                    const indexLabel = document.createElement("label");
                    indexLabel.innerText = "Індекс маси тіла:";
                    const indexInput = document.createElement("input");
                    indexInput.type = "number";
                    indexInput.name = "index";
                    const diseasesLabel = document.createElement("label");
                    diseasesLabel.innerText = "Перенесені захворювання сердечно-судинної системи: ";

                    const diseasesInput = document.createElement("textarea");
                    diseasesInput.name = "diseases";

                    const ageLabel = document.createElement("label");
                    ageLabel.innerText = "Вік";
                    const ageInput = document.createElement("input");
                    ageInput.type = "number";
                    ageInput.name = "age";

                    specDiv.appendChild(pressureLabel,pressureInput,indexLabel, indexInput, diseasesLabel, diseasesInput, ageLabel, ageInput);


                    doctorSelectWrapper.appendChild(this.fieldsContainer);
                    doctorSelectWrapper.appendChild(specDiv);
                }


            }
        })

        const createBtn = document.createElement("button");
        createBtn.innerText = "Створити";

        const closeBtn = document.createElement("button");
        closeBtn.innerText = "Відмінити";

        modal.appendChild(createBtn);
        modal.appendChild(closeBtn);


        return modalWrapper;

    }




}
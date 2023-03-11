export default class Modal {
    constructor() {

    }
    render(form) {
        const modalOverlay = document.createElement('div');
        const modal = document.createElement('div');
        const title = document.createElement('h2');
        const closeBtn = document.createElement('button');

        modalOverlay.className = 'modal-overlay';
        modal.className = 'modal';

        title.innerText = 'Вхід до особистого кабінету';

        closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>`;
        closeBtn.className = 'close';

        closeBtn.addEventListener("click", () => {
            modalOverlay.remove();
        });

        modalOverlay.addEventListener("click", (e) => {
            if (e.target === modalOverlay) {
                modalOverlay.remove();
            }
        });

        modal.append(closeBtn, title, form);
        modalOverlay.append(modal);

        return modalOverlay;
    }

}
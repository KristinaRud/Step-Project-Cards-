import VisitCardiologist from "./VisitCardiologist.js";
import VisitDentist from "./VisitDentist.js";
import VisitTherapist from "./VisitTherapist.js";
import Api, {token} from "./Api.js";

export default class Utils {
    constructor() {
        this.listContainer = document.querySelector(".visit__list");
        this.wrapperPlaceholder = document.querySelector(".wrapper-placeholder");
    }

     showAllCards() {
                if (token) {
            if (this.listContainer.childNodes.length) {
                this.wrapperPlaceholder.remove();
            }
            Api.getAllCards().then((data) => {
                data.forEach((appointment) => {
                    this.chooseRenderDoctor(appointment)
                });
            });
        }
    }



     chooseRenderDoctor(data) {
        switch (data.doctor) {
            case "Кардіолог":
                new VisitCardiologist(data).render(this.listContainer);
                break;
            case "Стоматолог":
                new VisitDentist(data).render(this.listContainer);
                break;
            case "Терапевт":
                new VisitTherapist(data).render(this.listContainer);
                break;
        }
    }

    static filterCards=(event, formFilter)=>{
       event.preventDefault();
       const search=formFilter.search.value.toLowerCase();
       const status=formFilter.status.value.toLowerCase();
       const terminate = formFilter.terminate.value.toLowerCase();
       const list = Array.from(document.querySelectorAll('.visit__list li'));
       console.log(list);
    
       let resFilterSearch;
       let resFilterStatus;
       let resFilterUrgency;
       //search by word
       if(search !== ""){
          resFilterSearch = list.filter(item=>{
             let str = (item.innerHTML).toLowerCase();
             if(str.includes(search)){
                item.classList.remove("hide");
             }else{item.classList.add("hide");}
          })
       }else resFilterSearch=[...list];
       
       if(status !=="всі" && resFilterSearch!==undefined){
          resFilterStatus=resFilterSearch.filter(item=>{
             let str = item.dataset.status;
             if(str.toLowerCase() === status){
                item.classList.remove("hide");
             }else{item.classList.add("hide");}
          })
       }else resFilterStatus=[...resFilterSearch];
    
       if(terminate !=="всі" && resFilterStatus!==undefined){
          resFilterUrgency=resFilterStatus.filter(item=>{
             let str = item.dataset.urgency;
             if(str.toLowerCase() === terminate){
                item.classList.remove("hide");
             }else{item.classList.add("hide");}
          })
       }else resFilterUrgency=[...resFilterStatus];
       
       console.log(...resFilterUrgency);
    }

    static reverseDate(date) {
        date = date.replaceAll(".", "-");
        const dateYear = date.substring(6);
        const dateMonth = date.substring(3,5);
        const dateDay = date.substring(0,2);
        return `${dateYear}-${dateMonth}-${dateDay}`;
    }
}
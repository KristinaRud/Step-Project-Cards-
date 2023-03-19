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

    static filterCards = (event, formFilter)=>{
       event.preventDefault();
       const search=formFilter.search.value.toLowerCase();
       const status=formFilter.status.value.toLowerCase();
       const terminate = formFilter.terminate.value.toLowerCase();
       const list = Array.from(document.querySelectorAll('.visit__list li'));

       list.forEach(el=>el.classList.remove("hide"));
    
       let resFilter=[...list];

       if(search !== ""){
          resFilter = resFilter.filter(item=>{
             let str = (item.innerHTML).toLowerCase();
             if(str.includes(search)){
                return item;
             }
          })
       }
       
       if(status !=="всі" && resFilter!==undefined && resFilter.length!==0){
        resFilter=resFilter.filter(item=>{
             let str = item.dataset.status;
             if(str.toLowerCase() === status){
                return item;
             }
          })
       }
    
       if(terminate !=="всі" && resFilter!==undefined && resFilter.length!==0){
        resFilter=resFilter.filter(item=>{
             let str = item.dataset.urgency;
             if(str.toLowerCase() === terminate){
                return item;
             }
          })
       }

       list.forEach(li=>{
        resFilter.forEach(res=>{
            if(li.dataset.id===res.dataset.id){
                li.classList.remove('hide');
            }else{ li.classList.add('hide');}
        })
       })
    }


    static crearFilter = (event, formFilter)=>{
        event.preventDefault();
        formFilter.search.value="";
        formFilter.status.value="Всі";
        formFilter.terminate.value="Всі";
        const list = Array.from(document.querySelectorAll('.visit__list li'));
        list.forEach(el=>el.classList.remove("hide"));
     
     }

    static reverseDate(date) {
        date = date.replaceAll(".", "-");
        const dateYear = date.substring(6);
        const dateMonth = date.substring(3,5);
        const dateDay = date.substring(0,2);
        return `${dateYear}-${dateMonth}-${dateDay}`;
    }
}
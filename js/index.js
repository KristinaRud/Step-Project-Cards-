import LoginButton from "./classes/LoginButton.js";
import { setToken } from "./classes/Api.js";
import Utils from "./classes/Utils.js";

//logIn('kristina.rud5@gmail.com', '123456');

//createCard(dataObj, '235ab8bf-e8e7-4ac9-ba7e-49b864771ddc');

const listContainer = document.querySelector(".visit__list");
const wrapperPlaceholder = document.querySelector(".wrapper-placeholder");

const formFilter = document.querySelector(".form-filter");

function filterCards(event){
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
   }else resFilterSearch=list;
   
   if(status !=="всі" && resFilterSearch!==undefined){
      resFilterStatus=resFilterSearch.filter(item=>{
         let str = item.dataset.status;
         if(str.toLowerCase() === status){
            item.classList.remove("hide");
         }else{item.classList.add("hide");}
      })
   }else resFilterStatus=resFilterSearch;

   if(terminate !=="всі" && resFilterStatus!==undefined){
      resFilterUrgency=resFilterStatus.filter(item=>{
         let str = item.dataset.urgency;
         if(str.toLowerCase() === terminate){
            item.classList.remove("hide");
         }else{item.classList.add("hide");}
      })
   }else resFilterUrgency=resFilterStatus;
   
   console.log(...resFilterUrgency);
}

document.addEventListener("DOMContentLoaded", () => {
   if(localStorage.getItem("authToken")){
      setToken(localStorage.getItem("authToken"));
   }
   LoginButton.updateButton();
   //
   //рендер карточек визита
   new Utils().showAllCards();

   formFilter.addEventListener('submit', (e)=>{
      filterCards(e);
   })

})

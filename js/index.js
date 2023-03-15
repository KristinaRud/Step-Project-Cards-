import Visit, { data1, data2, data3 } from "./classes/Visit.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitTherapist from "./classes/VisitTherapist.js";
import LoginButton from "./classes/LoginButton.js";
import Modal from "./classes/Modal.js";
import Api from "./classes/Api.js";
import api from "./api/api.js";
import { renderCards } from "./render.js";
import { setToken } from "./classes/Api.js";

//logIn('kristina.rud5@gmail.com', '123456');

//createCard(dataObj, '235ab8bf-e8e7-4ac9-ba7e-49b864771ddc');

// loginBtn.addEventListener("click", btnLogIn(root));

const listContainer = document.querySelector(".visit__list");
const wrapperPlaceholder = document.querySelector(".wrapper-placeholder");

const formFilter=document.querySelector(".form-filter");

document.addEventListener("DOMContentLoaded", () => {
   if(localStorage.getItem("authToken")){
      setToken(localStorage.getItem("authToken"));
   }
   LoginButton.updateButton();
   //
   //рендер карточек визита
   renderCards();
   formFilter.addEventListener('submit', (e)=>{
      filter(e);
   })
   //Api.createCard(data1, token).then(res=>console.log(res));
})
//console.log((async () => { await Api.sendLogin('kristina.rud5@gmail.com', '123456'); })());


function filter(event){
   event.preventDefault();
   const search=formFilter.search.value.toLowerCase();
   const status=formFilter.status.value.toLowerCase();
   const terminate = formFilter.terminate.value.toLowerCase();
   const list = document.querySelectorAll('.visit__list li');
   //search by word
console.log(list);
console.log(Array.from(document.querySelectorAll('.visit__list li')))
   list.forEach(item=>{
      let terminate=item.querySelector('.text__total');
      console.log(terminate);
   })   

   console.log(search,status,terminate, ...list);
}


function searchFilter(search, list){
   list.forEach(item=>{
      console.log(item.innerHTML);
      let str = item.innerHTML.toLowerCase();
      if(str.includes(search)){
         console.log(item);
         item.classList.remove("hide");
      }else{
         item.classList.add("hide");
      }
   })
}

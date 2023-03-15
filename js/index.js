import LoginButton from "./classes/LoginButton.js";
import { setToken } from "./classes/Api.js";
import Utils from "./classes/Utils.js";
import {data2, data1, data3} from "./classes/Visit.js";
import Api from "./classes/Api.js";

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
   new Utils().showAllCards();
   formFilter.addEventListener('submit', (e)=>{
      filter(e);
   })
   Api.createCard(data2, localStorage.getItem("authToken")).then(res=>console.log(res));

   //рендер карточек визита
   
})

// Api.createCard(data1).then(data=>{ console.log(data); new Utils().chooseRenderDoctor(data)})
// Api.createCard(data1).then(data=>{ console.log(data); new Utils().chooseRenderDoctor(data)})
//
// Api.createCard(data3).then(data=>{ console.log(data); new Utils().chooseRenderDoctor(data)})


function filter(event){
   event.preventDefault();
   const search=formFilter.search.value.toLowerCase();
   const status=formFilter.status.value.toLowerCase();
   const terminate = formFilter.terminate.value.toLowerCase();
   const list = document.querySelectorAll('.visit__list li');
   //search by word

   list.forEach(item=>{
      let str = item.innerHTML.toLowerCase();
      if((search==="" || str.includes(search)) && (status==="всі" || str.includes(status)) && (terminate ==="всі" || str.includes(terminate))){
         item.classList.add("hide");
      }else{item.classList.remove("hide")}
      // if(str.includes(search)){
      //    console.log(item);
      //    item.classList.remove("hide");
      // }else{
      //    item.classList.add("hide");
      // }
   })
console.log(list);
// console.log(Array.from(document.querySelectorAll('.visit__list li')))
//    list.forEach(item=>{
//       let terminate=item.querySelector('.text__total');
//       console.log(terminate);
//    })   

//    console.log(search,status,terminate, ...list);
}

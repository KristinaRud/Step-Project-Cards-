import {data1, data2, data3} from "./classes/Visit.js";
import VisitDentist from "./classes/VisitDentist.js";
import VisitCardiologist from "./classes/VisitCardiologist.js";
import VisitTherapist from "./classes/VisitTherapist.js";


const visit = new VisitDentist(data1);
const visit2 = new VisitCardiologist(data2);
const visit3 = new VisitTherapist(data3)
visit.render(document.querySelector('.visit__list'));
visit2.render(document.querySelector('.visit__list'));
visit3.render(document.querySelector('.visit__list'));


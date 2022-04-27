import { home } from './home'; // default page layout - header,background img

import { homeContent } from './home';
import { menu } from './menu';
import { contact } from './contact';


home();



function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
const middle = document.querySelector('.middle'); // smenqm mu go, sega go izchistvai





let homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    empty(middle); // before adding elements to dom, remove all the previous ones
    homeButton.disabled = true;
    middle.classList = 'middle'; // 1vo neshto opravi css po otdelno 
    homeContent();
});

let menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    empty(middle);
    menuButton.disabled = true;
    middle.classList = 'middle middleMenuContact'; // middle class for the DOM , middleMenuContact for the CSS
    menu();
});

let contactButton = document.querySelector('.contact');
contactButton.addEventListener('click',() => {
    empty(middle);
    contactButton.disabled = true;
    middle.classList = 'middle middleMenuContact';
    contact();
});





/*let ariwe = document.addEventListener('click', (event) => {
    button(event);
});

let homeButton = document.querySelector('.buttonHome');
let menuButton = document.querySelector('.buttonMenu');
let contactButton = document.querySelector('.buttonContact');

function button(event){
    
    if (event.taget.className == 'buttonHome'){
        homeContent();
        homeButton.disabled = true;
    }

   else if (event.taget.className == 'buttonMenu'){
        empty(middle);
        menu();
        menuButton.disabled = true;
    }

    else if (event.taget.className == 'buttonContact'){
        contact();
        contactButton.disabled = true;
    }
}*/



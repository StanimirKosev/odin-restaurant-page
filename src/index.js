import { home } from './home'; // default page layout, always loads

import { homeContent } from './home'; // content for Home, home.js has the default and the middle content for Home
import { menu } from './menu'; // content for Menu
import { contact } from './contact'; // content for Contact

home();
homeContent(); //default page

function empty(element) {
    while(element.firstElementChild) {
       element.firstElementChild.remove();
    }
  }
const middle = document.querySelector('.middle'); // targets the content of Home / Menu / Contact and removes all its dom elements on every button click



let homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    empty(middle); // before adding elements to dom, remove all the previous ones
    middle.classList = 'middle'; 
    homeContent();
});

let menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    empty(middle);
    middle.classList = 'middle middleMenuContact'; // middle class for the DOM - same for every page , middleMenuContact - CSS for Menu an Contact pages
    menu();
});

let contactButton = document.querySelector('.contact');
contactButton.addEventListener('click',() => {
    empty(middle);
    middle.classList = 'middle middleMenuContact';
    contact();
});

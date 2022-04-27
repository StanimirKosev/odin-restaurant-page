const parent = document.querySelector('.content'); // only el in html

function contact(){
    let middle = document.createElement('div');
    parent.appendChild(middle).className = 'middleMenu';

    let p2 = document.createElement('p');
    p2.textContent = 'Call :123 456 789';
    middle.appendChild(p2);

    let p1 = document.createElement('p');
    p1.textContent= 'Adress: 1397 Illinois St, San Francisco, CA 87505, United States';
    middle.appendChild(p1);

    let mapImg = document.createElement('img');
    mapImg.src = '../pics-fonts/map.png'
    mapImg.alt = 'map-picture'
    middle.appendChild(mapImg);
}

export { contact };
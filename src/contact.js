function contact(){
    let middleMenu = document.querySelector('.middle'); 

    let p2 = document.createElement('p');
    p2.textContent = 'Call :123 456 789';
    middleMenu.appendChild(p2);

    let p1 = document.createElement('p');
    p1.textContent= 'Adress: 1397 Illinois St, San Francisco, CA 87505, United States';
    middleMenu.appendChild(p1);

    let mapImg = document.createElement('img');
    mapImg.src = 'pics-fonts/map.png';
    mapImg.alt = 'map-picture';
    middleMenu.appendChild(mapImg);
}

export { contact };
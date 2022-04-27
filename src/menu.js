const parent = document.querySelector('.content'); // only el in html

function menu(){
    let middleMenu = document.querySelector('.middle'); // for dom

    let meatImg = document.createElement('img');
    meatImg.src = '../pics-fonts/meat1.jpg'
    meatImg.alt = 'meat-picture-1'
    middleMenu.appendChild(meatImg);

    let p2 = document.createElement('p');
    p2.textContent = 'Pork ribs';
    middleMenu.appendChild(p2);

    let p1 = document.createElement('p');
    p1.textContent= '21000 Sats';
    middleMenu.appendChild(p1);

    let meatImg2 = document.createElement('img');
    meatImg2.src = '../pics-fonts/meat2.jpg'
    meatImg2.alt = 'meat-picture-2'
    middleMenu.appendChild(meatImg2);

    let p3 = document.createElement('p');
    p3.textContent = 'Pork chops';
    middleMenu.appendChild(p3);

    let p4 = document.createElement('p');
    p4.textContent= '23000 Sats';
    middleMenu.appendChild(p4);
}

export { menu };
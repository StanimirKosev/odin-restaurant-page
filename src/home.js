const parent = document.querySelector('.content'); // only el in html

function home(){
    
    let backgroundImg = document.createElement('img');
    backgroundImg.src = '../pics-fonts/background.jpg'
    backgroundImg.alt = 'meat-cuts-picture'
    parent.appendChild(backgroundImg);

    // Header
    let header = document.createElement('div');
    parent.appendChild(header).className = 'header';

    let title = document.createElement('div');
    title.textContent = 'Meat Restaurant';
    header.appendChild(title);
    title.classList = 'title';

    let home = document.createElement('button');
    home.textContent = 'Home';
    header.appendChild(home).className = 'home';
    
    let menu = document.createElement('button');
    menu.textContent = 'Menu';
    header.appendChild(menu).className = 'menu';

    let contact = document.createElement('button');
    contact.textContent = 'Contact';
    header.appendChild(contact).className = 'contact';

    let middle = document.createElement('div');
    parent.appendChild(middle).className = 'middle'; // target element here bcs of the empty function
}
    
function homeContent(){
    
    //Middle content
    let middle = document.querySelector('.middle'); // for dom

    let p1 = document.createElement('p');
    p1.textContent = 'You can pay with Bitcoin';
    middle.appendChild(p1);

    let p2 = document.createElement('p');
    p2.textContent = 'Finest cuts only here';
    middle.appendChild(p2);

    let chefImg = document.createElement('img');
    chefImg.src = '../pics-fonts/chef.jpg';
    chefImg.alt = 'chef-cooking';
    middle.appendChild(chefImg);

    let p3 = document.createElement('p');
    p3.textContent = 'Order online or come visit us!';
    middle.appendChild(p3);
}

export { home , homeContent};
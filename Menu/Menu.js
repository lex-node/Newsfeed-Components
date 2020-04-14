/*******************
 WEBSITE DATA (MENU)
 ******************/

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/**************************************
 MENU COMPONENT WITH OUTPUT:
 <div class="menu">
 <ul>
 {each menu item as a list item}
 </ul>
 </div>
 *************************************/

const menuCreator = (arr) => {

  //create, classify and append elements
  const divElement = document.createElement('div');
  divElement.classList.add('menu');
  const menuItemsList = document.createElement('ul');

  arr.map(item => {
    let menuItem = document.createElement('li');
    menuItem.textContent = item;
    menuItemsList.appendChild(menuItem);
  });

  divElement.appendChild(menuItemsList);

  //event listeners
  const buttonClickHandler = (() => divElement.classList.toggle('menu--open'));
  document.querySelector('.menu-button').addEventListener('click', buttonClickHandler, false);

  //output complete element
  return divElement;
}

document.querySelector('.header').appendChild(menuCreator(menuItems));



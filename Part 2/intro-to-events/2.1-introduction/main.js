const menuElem = document.querySelector('#sweeties')
const titleElem = document.querySelector('.title')

titleElem.addEventListener('click',openMenu)

function openMenu(e) {
  menuElem.classList.add('open')
}

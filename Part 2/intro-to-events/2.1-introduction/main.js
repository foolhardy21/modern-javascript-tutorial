const button = document.querySelector('#hider')
const text = document.querySelector('#text')

button.addEventListener('click',hideText)

function hideText(e) {
  text.style.display='none'
}

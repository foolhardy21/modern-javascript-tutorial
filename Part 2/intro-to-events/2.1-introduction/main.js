const button = document.querySelector('#hider')

button.addEventListener('click',hideText)

function hideText(e) {
  button.style.display='none'
}

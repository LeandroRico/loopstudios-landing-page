const hamburguerIcon = document.querySelector('.js-hamburguer')
const menu = document.querySelector('.js-menu')
const body = document.querySelector('body')

hamburguerIcon.addEventListener('click', () => {
  hamburguerIcon.classList.toggle('change-icon')
  menu.classList.toggle('show-menu')
  body.classList.toggle('remove-scroll')
})

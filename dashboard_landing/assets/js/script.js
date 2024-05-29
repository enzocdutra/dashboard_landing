let openMenu = document.querySelector('.menu')
let menu = document.querySelector('.navbar')
let closeMenu = document.querySelector('.closeMenu')
openMenu.addEventListener('click', () => {
    menu.classList.remove('hide')
    openMenu.classList.add('hide')
})
closeMenu.addEventListener('click', () => {
    menu.classList.add('hide')
    openMenu.classList.remove('hide')
})
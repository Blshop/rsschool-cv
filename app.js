const mainMenu = document.querySelector('.mainMenu')
const openMenu = document.querySelector('.openMenu')
const closeMenu = document.querySelector('.closeMenu')

openMenu.addEventListener('click', show)
closeMenu.addEventListener('click', close)

function show() {
    mainMenu.style.display = 'flex'
    openMenu.style.display = 'none'
    closeMenu.style.display = 'block'
}

function close() {
    mainMenu.style.display = 'none'
    openMenu.style.display = 'block'
    closeMenu.style.display = 'none'
}
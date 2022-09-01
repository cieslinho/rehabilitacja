const navBtn = document.querySelector('.burger-btn')
const navMenu = document.querySelector('.nav__listMobile')
const navItems = document.querySelectorAll('.nav__itemMobile')

const handleNav = () => {
	navMenu.classList.toggle('nav__listMobile-active')
}

navBtn.addEventListener('click', handleNav)

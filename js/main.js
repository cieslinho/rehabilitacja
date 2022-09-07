const navBtn = document.querySelector('.burger-btn')
const navMenu = document.querySelector('.nav__listMobile')
const navItems = document.querySelectorAll('.nav__itemMobile')
const accordionBtn = document.querySelector('.gallery__accordion-btn')
const gallery = document.querySelector('.gallery__boxes')

const handleNav = () => {
	navMenu.classList.toggle('nav__listMobile-active')
	navItems.forEach(item => {
		item.addEventListener('click', () => {
			navMenu.classList.remove('nav__listMobile-active')
		})
	})
}
const handleAccordion = () => {
	gallery.classList.toggle('active')
}

accordionBtn.addEventListener('click', handleAccordion)
navBtn.addEventListener('click', handleNav)

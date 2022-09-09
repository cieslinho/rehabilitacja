const navBtn = document.querySelector('.burger-btn')
const navMenu = document.querySelector('.nav__listMobile')
const navItems = document.querySelectorAll('.nav__itemMobile')
const accordionBtn = document.querySelector('.gallery__accordion-btn')
const gallery = document.querySelector('.gallery__boxes')
const footerYear = document.querySelector('.footer__year')
const loadMoreBtn = document.querySelector('.offer__btn')

let currentItem = 3

loadMoreBtn.onclick = () => {
	let offerOption = [...document.querySelectorAll('.offer__option')]
	for (var i = currentItem; i < currentItem + 3; i++) {
		offerOption[i].style.display = 'flex'
	}
	currentItem += 3
	if (currentItem >= offerOption.length) {
		loadMoreBtn.style.display = 'none'
	}
}

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
const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

navBtn.addEventListener('click', handleNav)
accordionBtn.addEventListener('click', handleAccordion)
handleCurrentYear()

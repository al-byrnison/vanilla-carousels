const carousel = document.querySelector('.carousel')
const carouselContainer = carousel.querySelector('.carousel-container')
const carouselItems = carousel.querySelectorAll('.carousel-item')
const prevButton = document.querySelector('.carousel-button-prev')
const nextButton = document.querySelector('.carousel-button-next')
const carouselDots = carousel.querySelectorAll('.carousel-dot')
const carouselPosition = document.querySelector('.carousel-position')

let currentIndex = 0
let itemWidth = carouselItems[0].clientWidth
let containerWidth = carouselContainer.clientWidth
let itemsPerPage = Math.floor(containerWidth / itemWidth)
let maxIndex = carouselItems.length - itemsPerPage

function updateCarouselPosition() {
	let position = `${currentIndex + 1} / ${carouselItems.length}`
	carouselPosition.textContent = position
}

function updateCarouselFromDot(dotIndex) {
	currentIndex = dotIndex
	updateCarousel()
}

function updateCarouselDots() {
	carouselDots.forEach((dot, index) => {
		if (index === currentIndex) {
			dot.classList.add('active')
		} else {
			dot.classList.remove('active')
		}
		dot.addEventListener('click', () => {
			updateCarouselFromDot(index)
		})
	})
}

function updateCarousel() {
	carouselContainer.style.transform = `translateX(${
		-itemWidth * currentIndex
	}px)`
	updateCarouselPosition()
	updateCarouselDots()
}

prevButton.addEventListener('click', () => {
	if (currentIndex === 0) {
		currentIndex = maxIndex
	} else {
		currentIndex--
	}
	updateCarousel()
})

nextButton.addEventListener('click', () => {
	if (currentIndex === maxIndex) {
		currentIndex = 0
	} else {
		currentIndex++
	}
	updateCarousel()
})

updateCarouselDots()

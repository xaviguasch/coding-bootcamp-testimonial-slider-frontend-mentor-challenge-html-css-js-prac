const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const slides = document.querySelectorAll('.slide')

let currentSlide = 0
showSlide(currentSlide)

function showSlide(currentSlide) {
  slides.forEach((slide) => {
    slide.classList.add('hidden')
  })
  slides[currentSlide].classList.remove('hidden')
}

function goNextSlide() {
  currentSlide++

  if (currentSlide > slides.length - 1) {
    currentSlide = 0
  }
  showSlide(currentSlide)
}

function goPrevSlide() {
  currentSlide--

  if (currentSlide < 0) {
    currentSlide = slides.length - 1
  }

  showSlide(currentSlide)
}

nextBtn.addEventListener('click', () => {
  goNextSlide()
})

prevBtn.addEventListener('click', () => {
  goPrevSlide()
})

const headerLinks = document.querySelector('header nav')
const burgerMenu = document.querySelector('.toggle-menu-button')
const scrollLinks = document.querySelectorAll('.js-scroll')
const sliderTrack = document.querySelector('.slider-track')

document.addEventListener('scroll', toggleHeader)

scrollLinks.forEach(link =>{
  link.addEventListener('click', (event)=>{
    event.preventDefault()
    const href = link.getAttribute('href')
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
     })
  })
})

function toggleHeader(){
  const pixels = window.pageYOffset
  if (pixels > 60) {
    headerLinks.classList.add('scrolled')
    burgerMenu.classList.add('scrolled')
   
     } else {
    headerLinks.classList.remove('scrolled')
    burgerMenu.classList.remove('scrolled')
    }
}



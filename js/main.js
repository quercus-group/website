const headerLinks = document.querySelector('header nav')
const headerTag = document.querySelector('header')
const burgerMenu = document.querySelector('.toggle-menu-button')
const toggleMenu = document.querySelector('.toggle-menu')
const toggleMenuLinks = document.querySelectorAll('.toggle-menu a')
const closeMenuButton = document.querySelector('.close-menu')
const introText = document.querySelector('.intro')
const scrollLinks = document.querySelectorAll('.js-scroll')
const nextButton = document.querySelector('.next-button')
const sliderTrack = document.querySelector('.slider-track')
const animatedWords = ['across disciplines.', 'across geograpies.', 'across differences & divides.', 'across sectors.']
const overlays = document.querySelectorAll('.overlay')



document.addEventListener('scroll', toggleHeader)
burgerMenu.addEventListener('click', openNav)
closeMenuButton.addEventListener('click', closeNav)
toggleMenuLinks.forEach(link => {
  link.addEventListener('click', closeNav)
})
overlays.forEach(overlay => {
  overlay.addEventListener('click', ()=>{
    const overlayURL = overlay.querySelector('.other-page')
    window.location = overlayURL.getAttribute('href')
  })
})

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

function openNav (){
  gsap.to(toggleMenu, {clipPath: "circle(150% at 100% -10%)", duration: 1,})
  document.body.classList.add('hide')
}

function closeNav(){
  gsap.to(toggleMenu, {clipPath: "circle(1% at 100% -10%)", duration: 1,})
  document.body.classList.remove('hide')
}

let introAnimation = new gsap.timeline({
  defaults: {
    duration: 1,
    ease: "slow(0.7, 0.7, false)",
  },
});
introAnimation.fromTo(headerTag, {y: "-100%"}, {y:"0%"})

gsap.fromTo(sliderTrack, {x: "0%"}, {scrollTrigger: {
  trigger: sliderTrack,
  toggleActions: "restart pause resume pause",
  // start: "top start",
  // markers: true,
  
},
x: "-66.666%", 
duration: 45,
ease: "none",
repeat: "-1"  
})

gsap.to(nextButton,{scrollTrigger: {
  trigger: '.section-1',
  toggleActions: "play none reset reset",
  // start: "top start",
  // markers: true,
  
},
opacity: "0", 
duration: 0.5,
ease: "none",  
})

let cursor = gsap.to('.typer-cursor', {opacity: "0", ease: "power2.inOut", repeat: "-1", duration: 0.75,})
let typerTl = gsap.timeline({repeat: "-1"})
animatedWords.forEach(word=>{
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay: 1, })
  tl.to('.typer-text',{duration: 1.25, text: word, })
  typerTl.add(tl)
})
//LOADER
window.onload = () => {
    const preloader = document.querySelector(".loader")
    preloader.classList.add("load-finish")
}
// NAVBAR DROPDOWN
const navBarBottomNavLanguageDropdownOpener = document.querySelector(".navbar-bottom-nav-language")
const navBarBottomNavLanguageDropdown = document.querySelector(".navbar-bottom-nav-language-dropdown");
navBarBottomNavLanguageDropdownOpener.onclick = () => {
    navBarBottomNavLanguageDropdown.classList.toggle("active")
}
// HERO SECTION SLIDER
const slider = document.querySelector(".slider-images")
const sliderImages = document.querySelectorAll(".slide")
const prevBtn = document.querySelector(".prev")
const nextBtn = document.querySelector(".next")
const currentSlideDisplay = document.querySelector(".currentSlideDisplay")
const totalSlideDisplay = document.querySelector(".totalSlideDisplay")
let currentSlide = 0
prevBtn.onclick = () => {
    currentSlide--
    if(currentSlide == -1){
        currentSlide = sliderImages.length - 1
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
    else{
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
}
nextBtn.onclick = () => {
    currentSlide++
    if(currentSlide == sliderImages.length){
        currentSlide = 0
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
    else{
        slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
        currentSlideDisplay.innerHTML = `${currentSlide + 1}`
    }
}
setInterval( () => {
        currentSlide++;
        if(currentSlide == sliderImages.length){
            currentSlide = 0
            slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
            currentSlideDisplay.innerHTML = `${currentSlide + 1}`
        }
        else{
            slider.style.transform = `translateX(${-(currentSlide) * 100}%)`
            currentSlideDisplay.innerHTML = `${currentSlide + 1}`
        }
}, 2000)

currentSlideDisplay.innerHTML = `${currentSlide + 1}`
totalSlideDisplay.innerHTML = `${sliderImages.length}`

// DARKMODE JS AND STORE USING LOCAL STORAGE
const changeColor = document.querySelector('.navbar-bottom-nav-darkmode')
const body = document.body;
const currentTheme = localStorage.getItem('currentTheme')
if(currentTheme){
    body.classList.add('darkmode')
}
changeColor.onclick = () => {
    body.classList.toggle('darkmode')
    if(body.classList.contains('darkmode')){
            localStorage.setItem('currentTheme', 'enabled')
    }
    else{
            localStorage.removeItem('currentTheme')
    }
}
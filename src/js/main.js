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

// DARKMODE JS AND STORE USING LOCAL STORAGE
const changeColor = document.querySelector('.navbar-bottom-nav-darkmode')
const currentTheme = localStorage.getItem('currentTheme')
if(currentTheme){
    document.body.classList.add('darkmode')
}
changeColor.onclick = () => {
    document.body.classList.toggle('darkmode')
    if(document.body.classList.contains('darkmode')){
            localStorage.setItem('currentTheme', 'enabled')
            changeColor.innerHTML = `Turn off dark mode`
    }
    else{
            localStorage.removeItem('currentTheme')
            changeColor.innerHTML = `Turn on dark mode`
    }
}
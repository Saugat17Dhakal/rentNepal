const navbar = document.querySelector(".navbar-nav")
const openBtn = document.querySelector(".menu-btn")
const closeBtn = document.querySelector(".close-btn")
console.log("Hello, World!")
openBtn.addEventListener("click", () => {
    navbar.classList.add("active")
    openBtn.classList.remove("active")
    closeBtn.classList.add("active")
})
closeBtn.onclick = () => {
    navbar.classList.remove("active")
    openBtn.classList.add("active")
    closeBtn.classList.remove("active")
}
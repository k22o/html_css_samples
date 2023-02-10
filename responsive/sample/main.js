
// hamburger menu
const hamburgerOpen = () => {
    document.getElementById("menu-hamburger").classList.toggle("open");
    document.getElementById("menu-gnav").classList.toggle("open");
}
document.getElementById("menu-hamburger").addEventListener('click', hamburgerOpen);

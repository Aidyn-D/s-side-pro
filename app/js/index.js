import '../scss/style.scss';



let x = document.getElementById("hamburger").addEventListener("click", mobmenu);
let menu = document.getElementById("menu");

function mobmenu() {
    
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

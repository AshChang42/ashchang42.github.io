let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener('mousemove',cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX +"px";
}

navLinks.forEach(link =>{
    link.addEventListener("mouseleave", ()=>{
        mouseCursor.classList.remove("link-grow");
        link.classList.remove("hovered-links");
    });
    link.addEventListener("mouseover", ()=>{
        mouseCursor.classList.add("link-grow");
        link.classList.add("hovered-links");
    });
});

$(document).ready(function(){
    $('.navbar-dark > button').on('click', function(){
        $('.navbar-dark').toggleClass('color-changed');
    });
    });

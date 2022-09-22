// mobile navbar 
const btnEl = document.getElementById('menu-btn');
const overlatEl = document.getElementById('overlay');
const menuEl = document.getElementById('mobile-menu');

btnEl.addEventListener("click",()=>{
    btnEl.classList.toggle('open');
    overlatEl.classList.toggle('overlay-show');
    document.body.classList.toggle("no-scroll");
    menuEl.classList.toggle('show-menu');
}
);
// slider 1
        var swiper = new Swiper(".mySwiper", {
          effect: "cards",
          grabCursor: true,
        });

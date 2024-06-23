/*=============== SHOW MENU ===============*/
//Mendeklarasikan tiga variabel untuk tombol pencarian, dari ID HTML
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

/*===== MENU SHOW ===== */
/* Validate if constant exists */
//Saat tombol search diklik, maka akan menampilkan content search pada ID show-searh di HTML
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu');
   });
}

/*===== SEARCH HIDDEN ===== */
/* Validate if constant exists */
//jika button close diklik, maka nav menu ditampilkan akan di hapus
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu');
   });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
	const navMenu = document.getElementById('nav-menu');
	//jika nav link di klik maka show menu akan dihapus
	navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== SWIPER CLOTHING ===============*/
let swiperHome = new Swiper('.home__swiper', {
   loop: true,
   grabCursor: true,
   slidesPerView: 'auto',

   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

   breakpoints: {
      768:{
         slidesPerView: 3,
         centeredSlides: 'auto',
      },
      1152:{
         centeredSlides: 'auto',
         spaceBetween: -64,
      }
   }
})

/*=============== CHANGE BACKGROUND HEADER ===============*/
const bgHeader = () =>{
   const header = document.getElementById('header')
   //jika scrol maka ada shadow di nav
   this.scrollY >= 50 ? header.classList.add('bg-header')
                     : header.classList.remove('bg-header') 
}
window.addEventListener('scroll', bgHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
})

sr.reveal(`.home__swiper, .home__footer`)
sr.reveal(`.home__circle`, {scale: 1.5, delay: 300})
sr.reveal(`.home__subcircle`, {scale: 1.5, delay: 500})
sr.reveal(`.home__title`, {scale: 1, origin: 'bottom', delay: 1200})
sr.reveal(`.swiper-button-prev, .swiper-button-next`, {origin: 'bottom'})

// let navbar = document.querySelector('.header .navbar')

// document.querySelector('#menu-btn').onclick = () =>{
//   navbar.classList.add('active');
// }

// document.querySelector('#close-navbar').onclick = () =>{
//   navbar.classList.remove('active');
// };

// let registerBtn = document.querySelector('.account-form .register-btn');
// let loginBtn = document.querySelector('.account-form .login-btn');

// registerBtn.onclick = () =>{
//   registerBtn.classList.add('active');
//   loginBtn.classList.remove('active');
//   document.querySelector('.account-form .login-form').classList.remove('active');
//   document.querySelector('.account-form .register-form').classList.add('active');
// };

// loginBtn.onclick = () =>{
//   registerBtn.classList.remove('active');
//   loginBtn.classList.add('active');
//   document.querySelector('.account-form .login-form').classList.add('active');
//   document.querySelector('.account-form .register-form').classList.remove('active');
// };

// let accountForm = document.querySelector('.account-form')

// document.querySelector('#account-btn').onclick = () =>{
//   accountForm.classList.add('active');
// }

// document.querySelector('#close-form').onclick = () =>{
//   accountForm.classList.remove('active');
// };

var swiper = new Swiper(".team-slider", {
  loop:true,
  grabCursor:true,
  spaceBetween:20,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      0: {
          slidesPerView: 1,
      },
      768: {
          slidesPerView: 2,
      },
      991: {
          slidesPerView: 3,
      },
  },
});

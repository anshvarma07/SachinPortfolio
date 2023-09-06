document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navUl = document.querySelector(".logo-ul");
    const two = document.querySelector(".lets-connect");
    const three = document.querySelector(".head-ul");
    const proj = document.querySelector(".ProjHover");
    const navbar = document.querySelector('.nav');
  
    hamburgerMenu.addEventListener("click", function () {
      navUl.classList.toggle("nav-open");
      two.classList.toggle("nav-open");
      three.classList.toggle("nav-open");
      navbar.classList.toggle("scrolled");
    });
  });


  const navbar = document.querySelector('.nav');

  // Function to add or remove the "scrolled" class based on scroll position
  function toggleNavbarBackground() {
    if (window.scrollY > 0) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', toggleNavbarBackground);

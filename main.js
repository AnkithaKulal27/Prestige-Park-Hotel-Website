const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

//const sect1 = document.querySelector(".section_description_1");
const sect2 = document.querySelector(".section_description_2");
const btnmore = document.querySelector(".about_btn .btn");
const btnless = document.querySelector(".section_description_2 .btn");

btnmore.addEventListener("click", () => {
  sect2.classList.remove("hidden");
  btnmore.style.display = "none";
});

btnless.addEventListener("click", () => {
  sect2.classList.add("hidden");
  btnmore.style.display = "block";
});

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

document.addEventListener("click", (event) => {
  // Check if the click happened outside the menu and menu button
  //Checks if the clicked element (event.target) is not inside the navLinks and menuBtn element
  if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
    if (navLinks.classList.contains("open")) {
      navLinks.classList.remove("open");
      menuBtnIcon.setAttribute("class", "ri-menu-line");
    }
  }
});
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

//header container
ScrollReveal().reveal(".header_container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header_container h1", {
  ...scrollRevealOption,
  delay: 500,
});

//about container
ScrollReveal().reveal(".about_image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about_content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about_content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about_content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_btn", {
  ...scrollRevealOption,
  delay: 2000,
});

//room container
ScrollReveal().reveal(".room_card", {
  ...scrollRevealOption,
  delay: 500,
});

//service container
ScrollReveal().reveal(".service_list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});

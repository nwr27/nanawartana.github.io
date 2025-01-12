// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};
// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Form

document.getElementById("contact").addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const response = await fetch("https://script.google.com/macros/s/AKfycbwyq3DsJtKch9bdD11K_BM0fLuSKYlSdm1cA0krCFbFf0RyToTDrecltr6g_m69DfK1fw/exec", {
    method: "POST",
    body: JSON.stringify(formData),
  });

  const result = await response.json();
  alert(result.message);
});

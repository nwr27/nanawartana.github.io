document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (navbarCollapse.classList.contains("show")) {
      const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: true });
      bsCollapse.hide();
    }
  });
});

document.addEventListener("click", (event) => {
  const navbar = document.querySelector(".navbar-collapse");
  const toggler = document.querySelector(".navbar-toggler");
  if (navbar.classList.contains("show") && !navbar.contains(event.target) && !toggler.contains(event.target)) {
    const bsCollapse = new bootstrap.Collapse(navbar, { toggle: true });
    bsCollapse.hide();
  }
});

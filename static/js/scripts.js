// Existing JavaScript
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

// Tambahkan JavaScript baru di sini

// Mengganti gambar saat di-hover dan mengembalikannya saat tidak di-hover
const profileImg = document.getElementById("profile-img");
const originalSrc = "static/img/nana.jpg";
const hoverSrc = "static/img/nana2.jpg";

profileImg.addEventListener("mouseover", () => {
  profileImg.src = hoverSrc;
});

profileImg.addEventListener("mouseout", () => {
  profileImg.src = originalSrc;
});

// Mengganti gambar saat diklik (toggle)
profileImg.addEventListener("click", () => {
  if (profileImg.classList.contains("active")) {
    profileImg.src = originalSrc;
    profileImg.classList.remove("active");
  } else {
    profileImg.src = hoverSrc;
    profileImg.classList.add("active");
  }
});

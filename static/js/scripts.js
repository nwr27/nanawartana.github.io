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

const profileImg = document.getElementById("profile-img");
const originalSrc = "static/img/nana.jpg";
const hoverSrc = "static/img/nana2.jpg";
let isLocked = false;

// Fungsi untuk mengubah gambar dan transformasi
function setImage(src, locked) {
  profileImg.src = src;
  if (locked) {
    profileImg.classList.add("locked");
  } else {
    profileImg.classList.remove("locked");
  }
}

// Event listener untuk hover (mouseover dan mouseout)
profileImg.addEventListener("mouseover", () => {
  if (!isLocked) {
    setImage(hoverSrc, false);
  }
});

profileImg.addEventListener("mouseout", () => {
  if (!isLocked) {
    setImage(originalSrc, false);
  }
});

// Event listener untuk klik
profileImg.addEventListener("click", () => {
  isLocked = !isLocked; // Toggle state
  if (isLocked) {
    setImage(hoverSrc, true);
  } else {
    setImage(originalSrc, false);
  }
});

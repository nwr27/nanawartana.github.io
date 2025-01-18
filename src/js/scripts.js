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


const translations = {
  en: {
    // Header Navigation
    "nav-home": "Home",
    "nav-about": "About Me",
    "nav-projects": "Projects",
    "nav-career": "Career",
    "nav-blog": "Blog",
    "nav-contact": "Contact",

    // Hero Section
    "hero-greeting": "Hi you👋, it's me <span class=\"font-['Fira_Code'] block font-bold text-dark text-4xl mt-1 mb-2 lg:text-5xl\">Nana Wartana</span>",
    "hero-title": "Multidisciplinary Engineer",
    "hero-description":
      "I am an expert in artificial intelligence, robotics, computer networks, electrical power systems, and MEP (mechanical, electrical, and plumbing). My interests in art, engineering, and sports reflect a balance between technology, creativity, and fitness.",

    // About Section
    "about-heading": "About Me",
    "about-subheading": "Who Am I?",
    "about-description":
      'I was born in <span class="text-dark font-semibold">Majalengka</span>, West Java, and enjoy a balanced life between career and hobbies. I have a great interest in the <span class="text-dark font-semibold">arts</span>, such as painting and playing musical instruments, especially the guitar and I can play almost all other musical instruments. Additionally, <span class="text-dark font-semibold">sports</span> are my hobbies, such as calisthenics, volleyball, swimming, and badminton, which I use to maintain health and physical strength. In my free time, I am also interested in exploring the latest technologies and developing new skills, such as <span class="text-dark font-semibold">artificial intellegence</span>, machine learning, generative AI, and computer vision. My life inspiration comes from the Sirah Nabawiyah of <span class="text-dark font-semibold">Prophet Muhammad SAW</span> and scientific figures like <span class="text-dark font-semibold">Sir Isaac Newton</span>. Prophet Muhammad SAW is the perfect example of leading a <span class="text-dark font-semibold">Multidisciplianary</span> life, with visionary leadership, intelligence, patience, and exceptional adaptability, reflecting harmony between spirituality, social, and professional aspects. Meanwhile, Newton\'s <span class="text-dark font-semibold">revolutionary thinking</span>, which started from simple observations of a falling apple, shows how curiosity can trigger great changes. This principle guides me as an <span class=\'text-dark font-semibold\'>Explorer and Innovator</span>.',

    // About-Skills
    "education-skills-heading": "Education & Skills",
    "education-skills-description":
      'My professional journey began with studying <span class="text-dark font-semibold">electrical engineering</span> and actively participating in a <span class="text-dark font-semibold">robotics</span> community, which laid the foundation for my multidisciplinary career. My interest in engineering emerged during school, driven by my <span class="text-dark font-semibold">passion</span> for mathematics, physics, and crafting. In middle school, I developed an interest in the arts by playing guitar, eventually <span class="text-dark font-semibold">winning a solo guitar competition</span> in high school. Additionally, I participated in Mathematics and Astronomy Olympiads, further solidifying my love for science. During college, I chose electrical power engineering to deepen my understanding of electrical physics and joined a robotics community, which broadened my perspective on robotic systems. This experience led me to achieve <span class="text-dark font-semibold">a national championship at the Indonesian Robot Contest</span>. After graduation, I worked as a QA MEP Engineer, responsible for the quality of mechanical, electrical, and plumbing systems in building projects. Currently, as an AI Engineer, I focus on computer vision solutions, database management, and IT networks, <span class="text-dark font-semibold">integrating diverse skills</span> to drive innovative solutions.',
    "skills-heading": "Skills on:",

    // Projects Section
    "projects-title": "Projects",
    "project-1-title": "Project 1",
    "project-1-description":
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, aperiam repudiandae! Nostrum quam vitae delectus? Id, ullam accusantium et, quasi nobis minima non sed veniam blanditiis minus porro natus ut.",

    // Career Section
    "career-heading": "Career History",
    "career-subheading": "Practical & Work Experience",
    "career-description":
      "Throughout my career journey, I have had the opportunity to be involved in various projects and work with great teams at leading companies. Each experience provides new insights and all strengthen my abilities in technology and project management.",

    // Blog Section
    "blog-heading": "Personal Blog",
    "blog-subheading": "Articles",
    "blog-description": "I produce inspirational articles and writings. These articles discuss modern technology topics, digital innovation, and effective implementation strategies.",

    // Contact Section
    "contact-heading": "Contact",
    "contact-subheading": "Get in Touch",
    "contact-name-label": "Name",
    "contact-email-label": "Email",
    "contact-message-label": "Message",
    "contact-submit-button": "Send",

    // Footer
    "footer-contact-heading": "Contact Me",
    "footer-contact-email": "email: nanawartana27@gmail.com",
    "footer-contact-whatsapp": "WhatsApp: <a href='https://wa.me/6285163587727' target='_blank' class='font-bold hover:text-tertiary'>0851-6358-7727</a>",
    "footer-contact-address": "Dsn. Cisahang, Ds. Mekarmulya, Kec. Kertajati, Kab. <a href='https://maps.app.goo.gl/p1748SfUf4MqxzU6A' target='_blank' class='font-extrabold hover:text-tertiary'>Majalengka</a>, WEST JAVA 45457",
    "footer-products-heading": "Development Products",
    "footer-links-heading": "Links",
    "footer-made-by":
      "Made with <span class='text-pink-500'>💕</span> by <a href='https://www.instagram.com/_nwr27_' target='_blank' class='font-bold text-pink-500'>Nana Wartana</a> using the <a href='https://tailwindcss.com' target='_blank' class='font-bold text-sky-500'>Tailwind CSS</a> framework.",

    // Add more translations as needed
  },
};

let currentLanguage = localStorage.getItem("language") || "id";
const toggleButton = document.getElementById("language-toggle");
const languageIcon = document.getElementById("language-icon");

toggleButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "id" ? "en" : "id";
  localStorage.setItem("language", currentLanguage);
  updateLanguage();
  updateLanguageIcon();
});

function updateLanguage() {
  if (currentLanguage === "en") {
    for (const [id, text] of Object.entries(translations.en)) {
      const element = document.getElementById(id);
      if (element) {
        element.innerHTML = text;
      }
    }
  } else {
    // Implementasi untuk bahasa Indonesia
    // Misalnya, Anda dapat memuat terjemahan untuk bahasa Indonesia
    // atau mengatur ulang halaman jika bahasa Indonesia adalah default
    location.reload();
  }
}

function updateLanguageIcon() {
  if (currentLanguage === "en") {
    languageIcon.src = "src/img/nav/en.svg";
    languageIcon.alt = "EN";
  } else {
    languageIcon.src = "src/img/nav/id.svg";
    languageIcon.alt = "ID";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  if (currentLanguage === "en") {
    updateLanguage();
  }
  updateLanguageIcon();
});

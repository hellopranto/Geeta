const servicesData = [
  {
    icon: "images/book-4986.svg",
    title: " যথার্থ গীতা বই",
    content:
      "অনলাইনে খুব সহজেই যথার্থ গীতা বই পড়ুন।",
  },

  {
    icon: "images/headphone-916.svg",
    title: "অডিও বই",
    content:
      "সময় বাঁচাতে অডিও বুক শুনতে পারবেন।",
  },

  {
    icon: "images/play-button-4210.svg",
    title: "ভিডিও",
    content:
      "ভিডিও চিত্র সহ যথার্থ গীতা ",
  },

  
];

const blogData = [
  {
    thumbnail: "images/blog1.jpg",
    title: "শ্রীমদ্ভগবদ্গীতা যথার্থ গীতা ডাউনলোড করুন",
    excerpt:'পিডিএফ'
,
    link: "https://yatharthgeeta.com/upload/books/yatharthgeeta/indian/Bengali.pdf",
  },

  {
    thumbnail: "images/blog1.jpg",
    title: "যথর্থ গীতা অডিও বাংলা",
    excerpt:
      "অডিও",
    link: "https://archive.org/compress/YatharthGeetaBengaliAudio/formats=VBR%20MP3&file=/YatharthGeetaBengaliAudio.zip",
  },

  {
    thumbnail: "images/blog1.jpg",
    title: "যথার্থ গীতা ভিডিও",
    excerpt:
      "ভিডিও",
    link: "https://www.youtube.com/channel/UC1QgXbpoXVc0SIsI9jSw9Zg",
  },
];

const servicesContainer = document.querySelector(".services-container");
const cardsContainer = document.querySelector("#blog .cards-container");

// Display services

const displayServices = () => {
  servicesData.forEach((s) => {
    const HTML = `<div data-aos="flip-left" class="icon">
        <img src="${s.icon}" alt="" />
      </div>

      <div data-aos="fade-in" class="service-content">
        <h3>${s.title}</h3>
        <p>
          ${s.content}
        </p>
      </div>`;

    const service = document.createElement("div");
    service.classList.add("service");
    service.innerHTML = HTML;
    servicesContainer.appendChild(service);
  });
};

displayServices();

// Displaying Blog posts

const displayBlogPosts = () => {
  blogData.forEach((b) => {
    const HTML = `<img src="${b.thumbnail}" alt="" />
    <h3>${b.title}</h3>
    <p>
      ${b.excerpt}
    </p>
    <a href="${b.link}">বিস্তারিত</a>`;

    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = HTML;
    card.setAttribute("data-aos", "fade-in");
    cardsContainer.appendChild(card);
  });
};

displayBlogPosts();

// Animation for navbar

window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");

  if (window.scrollY > 20) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Mobile Menu

const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");

menuIcon.addEventListener("click", () => {
  mobileMenuItems.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuItems.classList.remove("active");
});

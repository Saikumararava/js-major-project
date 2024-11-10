// Sidebar and Overlay
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

// Sidebar open
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  overlay.classList.toggle("show");
});

// Sidebar close
overlay.addEventListener("click", () => {
  sidebar.classList.remove("open");
  overlay.classList.remove("show");
});

// Carousel
const slides = document.querySelector('.carousel-slides');
const totalSlides = document.querySelectorAll('.carousel-slides img').length;
let currentIndex = 0;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 25}%)`;
}

function showPreviousSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Carousel slides auto-slide every 3 seconds
setInterval(showNextSlide, 3000);

// Button events for manual slide control
document.getElementById('nextBtn').addEventListener('click', showNextSlide);
document.getElementById('prevBtn').addEventListener('click', showPreviousSlide);

// Change image on hover
const productImages = document.querySelectorAll('.product-box img');

// Store original and hover images for each brand

const images = {
  Puma: { original: 'puma-logo-cover-958x575-1.png', hover: 'puma hover.png' },
  Adidas: { original: 'adidas logo 2.jpg', hover: 'adi hoverrr.png' },
  Nike: { original: 'nike logo 1.png', hover: 'nike hoverrrr.png' },
  NewBalance: { original: 'newbalance logo 2.png', hover: 'nike hoverrrr.png' }, // Correct the hover image path here
};


// Add mouseover and mouseout events to each product image
productImages.forEach((img) => {
  const brandName = img.alt;
  console.log(`Brand name detected: ${brandName}`); // Debugging: Log brand names

  img.addEventListener('mouseover', () => {
    if (images[brandName]) {
      console.log(`Hover image for ${brandName} is ${images[brandName].hover}`); // Debugging: Log hover image path
      // Change to hover image
      img.src = images[brandName].hover;
    }
  });

  img.addEventListener('mouseout', () => {
    if (images[brandName]) {
      console.log(`Original image for ${brandName} is ${images[brandName].original}`); // Debugging: Log original image path
      // Back to original image
      img.src = images[brandName].original;
    }
  });
});

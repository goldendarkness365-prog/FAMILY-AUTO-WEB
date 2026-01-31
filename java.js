<!-- Swiper JS CDN -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script>
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
</script>
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4, // increase number of visible cars
  spaceBetween: 40, // more spacing between cars
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function filterCars() {
  const input = document.getElementById('searchBar').value.toLowerCase();
  const cars = document.querySelectorAll('.car-card');

  cars.forEach(car => {
    const name = car.getAttribute('data-name').toLowerCase();
    if (name.includes(input)) {
      car.style.display = 'block';
    } else {
      car.style.display = 'none';
    }
  });
}
let currentIndex = 0;
let images = [];

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const caption = document.getElementById("lightbox-caption");

  images = Array.from(document.querySelectorAll(".gallery-item img"));
  currentIndex = images.indexOf(img);

  lightbox.style.display = "block";
  lightboxImg.src = img.src;
  caption.innerHTML = img.alt;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;

  const img = images[currentIndex];
  document.getElementById("lightbox-img").src = img.src;
  document.getElementById("lightbox-caption").innerHTML = img.alt;
}
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3, // desktop
  spaceBetween: 20,
  breakpoints: {
    768: {
      slidesPerView: 1, // mobile
    }
  }
});

// Interior modal
function openInterior() {
  const modal = document.getElementById("interiorModal");
  const img = document.getElementById("interiorImg");
  img.src = "Copilot_20260116_170406.png";
  modal.style.display = "block";
}
function closeInterior() {
  document.getElementById("interiorModal").style.display = "none";
}
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fill.speed").style.width = "90%";
  document.querySelector(".fill.torque").style.width = "75%";
  document.querySelector(".fill.efficiency").style.width = "65%";
});
// Animate performance bars on page load
window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".fill.speed").style.width = "90%";
  document.querySelector(".fill.torque").style.width = "75%";
  document.querySelector(".fill.efficiency").style.width = "65%";
});

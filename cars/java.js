/* =========================
   Inventory Page Search Bar
   ========================= */
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

/* =========================
   Lightbox Gallery (Car Detail)
   ========================= */
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

/* =========================
   Swipe Gestures for Lightbox (Mobile)
   ========================= */
let startX = 0;

document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.getElementById("lightbox");
  if (lightbox) {
    lightbox.addEventListener("touchstart", function(e) {
      startX = e.touches[0].clientX;
    });

    lightbox.addEventListener("touchend", function(e) {
      let endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) {
        changeImage(1); // swipe left → next image
      } else if (endX > startX + 50) {
        changeImage(-1); // swipe right → previous image
      }
    });
  }
});

/* =========================
   Interior Modal Zoom
   ========================= */
function openInterior() {
  const modal = document.getElementById("interiorModal");
  const img = document.getElementById("interiorImg");
  img.src = "car-interior.jpg"; // replace with dynamic source if needed
  modal.style.display = "block";
}

function closeInterior() {
  document.getElementById("interiorModal").style.display = "none";
}

/* =========================
   Performance Highlights Bars
   ========================= */
window.addEventListener("load", () => {
  const speedBar = document.querySelector(".fill.speed");
  const torqueBar = document.querySelector(".fill.torque");
  const efficiencyBar = document.querySelector(".fill.efficiency");

  if (speedBar && torqueBar && efficiencyBar) {
    speedBar.style.width = "90%";
    torqueBar.style.width = "75%";
    efficiencyBar.style.width = "65%";
  }
});
function changeView(src) {
  document.getElementById("lightbox-img").src = src;
}
function changeView(src) {
  const img = document.getElementById("lightbox-img");
  img.classList.add("fade-out");
  setTimeout(() => {
    img.src = src;
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    setTimeout(() => img.classList.remove("fade-in"), 500);
  }, 500);
}
// Declare once at the very top
let currentIndex = 0;

// Car views (filenames only)
const carViews = [
  "imgi_31_622354617_1212168611058795_2699262881328221358_n.webp", // Front
  "imgi_32_618239202_1212169367725386_2797200893620008522_n.webp", // Back
  "imgi_35_621799430_1212170167725306_5541391585275819580_n.webp", // Side
  "imgi_47_618583288_1212174007724922_4851369089993468968_n.webp"  // Interior
];


// Open lightbox with clicked image
function openLightbox(imgElement) {
  const lightbox = document.getElementById("lightbox");
  const img = document.getElementById("lightbox-img");
  lightbox.style.display = "block";

  // Find index by matching src against array
  const filename = imgElement.src.split("/").pop();
  currentIndex = carViews.findIndex(view => filename.includes(view));
  img.src = carViews[currentIndex];
}

// Change view
function changeView(index) {
  const img = document.getElementById("lightbox-img");
  img.classList.add("fade-out");
  setTimeout(() => {
    img.src = carViews[index];
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    setTimeout(() => img.classList.remove("fade-in"), 500);
  }, 500);
  currentIndex = index;
}

// Slide navigation
function changeSlide(n) {
  currentIndex = (currentIndex + n + carViews.length) % carViews.length;
  changeView(currentIndex);
}

// Change view (buttons)
function changeView(src) {
  const img = document.getElementById("lightbox-img");
  img.classList.add("fade-out");
  setTimeout(() => {
    img.src = src;
    img.classList.remove("fade-out");
    img.classList.add("fade-in");
    setTimeout(() => img.classList.remove("fade-in"), 500);
  }, 500);

  currentIndex = carViews.indexOf(src);
}

// Slide navigation (arrows)
function changeSlide(n) {
  currentIndex = (currentIndex + n + carViews.length) % carViews.length;
  changeView(carViews[currentIndex]);
}

// Keyboard support
document.addEventListener("keydown", function(e) {
  const lightbox = document.getElementById("lightbox");
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowLeft") changeSlide(-1);
    if (e.key === "ArrowRight") changeSlide(1);
    if (e.key === "Escape") closeLightbox();
  }
});
let touchStartX = 0;
let touchEndX = 0;

const lightbox = document.getElementById("lightbox");

lightbox.addEventListener("touchstart", function(e) {
  touchStartX = e.changedTouches[0].screenX;
}, false);

lightbox.addEventListener("touchend", function(e) {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
}, false);

function handleSwipe() {
  const threshold = 50; // minimum distance for swipe
  if (touchEndX < touchStartX - threshold) {
    changeSlide(1); // swipe left → next image
  }
  if (touchEndX > touchStartX + threshold) {
    changeSlide(-1); // swipe right → previous image
  }
}

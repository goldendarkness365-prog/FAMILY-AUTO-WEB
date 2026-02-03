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

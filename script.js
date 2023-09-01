const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.getElementById("lightbox-image");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
let currentIndex = 0;

// Add click event listeners to gallery items
galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

// Open the lightbox and display the selected image
function openLightbox(index) {
  currentIndex = index;
  lightboxImage.src = galleryItems[index].querySelector("img").src;
  lightbox.classList.add("active");
}

// Close the lightbox
function closeLightbox() {
  lightbox.classList.remove("active");
}

// nextBtn
nextBtn.addEventListener("click", () => {
    if (currentIndex < galleryItems.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    openLightbox(currentIndex);
  });
  
  // PrevBtn 
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = galleryItems.length - 1;
    }
    openLightbox(currentIndex);
  });
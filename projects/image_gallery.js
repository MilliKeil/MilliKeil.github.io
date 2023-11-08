// JavaScript code for the image gallery
const images = document.querySelectorAll('.image-gallery img');
let currentImageIndex = 0;

function showImage(index) {
  images[currentImageIndex].classList.remove('active');
  images[index].classList.add('active');
  currentImageIndex = index;
}

function nextImage() {
  const nextIndex = currentImageIndex + 1;
  if (nextIndex < images.length) {
    showImage(nextIndex);
  } else {
    showImage(0);
  }
}

function prevImage() {
  const prevIndex = currentImageIndex - 1;
  if (prevIndex >= 0) {
    showImage(prevIndex);
  } else {
    showImage(images.length - 1);
  }
}

// Add event listeners to the navigation buttons
const prevButton = document.querySelector('#prev-button');
prevButton.addEventListener('click', prevImage);

const nextButton = document.querySelector('#next-button');
nextButton.addEventListener('click', nextImage);

// Show the first image initially
showImage(0);
images[0].classList.add('active');
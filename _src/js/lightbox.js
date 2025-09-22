// Lightbox functionality
document.addEventListener('DOMContentLoaded', function() {
  const photos = document.querySelectorAll('.photo');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const closeLightbox = document.getElementById('close-lightbox');
  const prevButton = document.getElementById('prev-button');
  const nextButton = document.getElementById('next-button');
  const counter = document.getElementById('lightbox-counter');
  let currentIndex = 0;
  
  // Create an array of image sources
  const imageSources = [];
  photos.forEach(photo => {
	imageSources.push({
	  src: photo.src,
	  alt: photo.alt || ''
	});
  });
  
  // Open lightbox when clicking on a photo
  photos.forEach((photo, index) => {
	photo.addEventListener('click', function() {
	  currentIndex = index;
	  showImage(currentIndex);
	  lightbox.style.display = 'flex';
	});
  });
  
  // Show image in lightbox
  function showImage(index) {
	lightboxImg.src = imageSources[index].src;
	lightboxImg.alt = imageSources[index].alt;
	counter.textContent = `${index + 1} / ${imageSources.length}`;
  }
  
  // Close lightbox
  closeLightbox.addEventListener('click', function() {
	lightbox.style.display = 'none';
  });
  
  // Close lightbox when clicking outside the image
  lightbox.addEventListener('click', function(e) {
	if (e.target === lightbox) {
	  lightbox.style.display = 'none';
	}
  });
  
  // Navigate through images
  prevButton.addEventListener('click', function() {
	currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
	showImage(currentIndex);
  });
  
  nextButton.addEventListener('click', function() {
	currentIndex = (currentIndex + 1) % imageSources.length;
	showImage(currentIndex);
  });
  
  // Handle keyboard navigation
  document.addEventListener('keydown', function(e) {
	if (lightbox.style.display === 'flex') {
	  if (e.key === 'ArrowLeft') {
		currentIndex = (currentIndex - 1 + imageSources.length) % imageSources.length;
		showImage(currentIndex);
	  } else if (e.key === 'ArrowRight') {
		currentIndex = (currentIndex + 1) % imageSources.length;
		showImage(currentIndex);
	  } else if (e.key === 'Escape') {
		lightbox.style.display = 'none';
	  }
	}
  });
});
const box = document.querySelector('.Box');
// Initial position
let position = 0;

function animate() {
  // Updating scene logic
  // moving box for one pixel per frame
  // "requestAnimationFrame" is optimized for 60fps
  // so we should get smooth movement of 60px per second
  position += 1;

  // Render updated scene
  box.style.transform = `translateX(${ position }px)`;

  // Start next frame
  requestAnimationFrame(animate);
}

// Start animation
animate();


document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const contactLink = document.getElementById('contact-link');
  const closeBtn = document.getElementById('close-btn');

  contactLink.addEventListener('click', function(event) {
    event.preventDefault();
    contactForm.style.visibility = 'visible';
    contactForm.style.opacity = '1';
    document.body.style.overflow = 'hidden';
  });

  window.addEventListener('click', function(event) {
    if (event.target === contactForm) {
      contactForm.style.visibility = 'hidden';
      contactForm.style.opacity = '0';
      document.body.style.overflow = 'auto';
    }
  });

  // Add drag functionality to the contact form
  contactForm.addEventListener('mousedown', function(event) {
    let initialX = event.clientX;
    let initialY = event.clientY;

    function move(event) {
      let currentX = event.clientX;
      let currentY = event.clientY;
      contactForm.style.left = (contactForm.offsetLeft - initialX + currentX) + 'px';
      contactForm.style.top = (contactForm.offsetTop - initialY + currentY) + 'px';
      initialX = currentX;
      initialY = currentY;
    }

    function up() {
      document.removeEventListener('mousemove', move);
      document.removeEventListener('mouseup', up);
    }

    document.addEventListener('mousemove', move);
    document.addEventListener('mouseup', up);
  });

  // Close the form when the close button is clicked
  closeBtn.addEventListener('click', function() {
    contactForm.style.visibility = 'hidden';
    contactForm.style.opacity = '0';
    document.body.style.overflow = 'auto';
  });
});


    // Smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    
    document.addEventListener('DOMContentLoaded', () => {
      const contactForm = document.getElementById('contactForm');
      const formResponse = document.getElementById('formResponse');
    
      contactForm.addEventListener('submit', async (event) => {
        event.preventDefault();
    
        const formData = new FormData(contactForm);
        try {
          const response = await fetch(contactForm.action, {
            method: 'POST',
            body: formData,
          });
    
          const result = await response.text();
          formResponse.textContent = result;
          formResponse.style.display = 'block';
        } catch (error) {
          formResponse.textContent = 'An error occurred. Please try again.';
          formResponse.style.display = 'block';
        }
      });
    });
    
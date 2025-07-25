document.addEventListener('DOMContentLoaded', function() {
    // Sample JSON data (in a real scenario, you would fetch this from a file)
    const profiles = [
      {
        "image": "./media/missnijad.jpg",
        "name": "NIJAD NASR",
        "role": "Operations Director"
      },
      {
        "image": "./media/profile2.jpeg",
        "name": "JOHN DOE",
        "role": "Technical Director"
      },
      {
        "image": "./media/profile3.jpeg",
        "name": "JANE SMITH",
        "role": "Finance Director"
      }
    ];
    
    // For this example, we'll use the inline data
    initSlider(profiles);
    
    function initSlider(profiles) {
      const profileImage = document.getElementById('profile-image');
      const directorName = document.getElementById('director-name');
      const directorRole = document.getElementById('director-role');
      const sliderDots = document.getElementById('slider-dots');
      
      let currentIndex = 0;
      let slideInterval;
      
      // Create dots
      profiles.forEach((_, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
          goToSlide(index);
        });
        sliderDots.appendChild(dot);
      });
      
      // Initialize first slide
      updateSlide(0);
      
      // Start auto-rotation
      startSlider();
      
      // Pause on hover
      const cardContainer = document.querySelector('.welcome-card-container');
      cardContainer.addEventListener('mouseenter', pauseSlider);
      cardContainer.addEventListener('mouseleave', startSlider);
      
      function updateSlide(index) {
        const profile = profiles[index];
        profileImage.src = profile.image;
        profileImage.alt = profile.name;
        directorName.textContent = profile.name;
        directorRole.textContent = profile.role;
        
        // Update dots
        document.querySelectorAll('.slider-dots .dot').forEach((dot, i) => {
          dot.classList.toggle('active', i === index);
        });
      }
      
      function goToSlide(index) {
        currentIndex = index;
        updateSlide(currentIndex);
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % profiles.length;
        updateSlide(currentIndex);
      }
      
      function startSlider() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      }
      
      function pauseSlider() {
        clearInterval(slideInterval);
      }
    }
  });
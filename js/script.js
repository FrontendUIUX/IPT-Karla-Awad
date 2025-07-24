document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.fake-slider-dots .dot');
    let currentActive = 0;
    
    // Function to update active dot
    function updateActiveDot() {
      // Remove active class from all dots
      dots.forEach(dot => dot.classList.remove('active'));
      
      // Add active class to current dot
      dots[currentActive].classList.add('active');
      
      // Move to next dot (loop back to 0 after last dot)
      currentActive = (currentActive + 1) % dots.length;
    }
    
    // Initial call
    updateActiveDot();
    
    setInterval(updateActiveDot, 1500);
  });
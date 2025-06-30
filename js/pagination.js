document.addEventListener('DOMContentLoaded', () => {
    const leftSpan = document.querySelector('.number.left');
    const middleSpan = document.querySelector('.number.middle');
    const rightSpan = document.querySelector('.number.right');
    const fill = document.querySelector('.progress-fill');
  
    const numbers = ['1', '2', '3', '4', '5'];
    let currentIndex = 0;
  
    function updateNumbers() {
      const a = numbers[currentIndex % numbers.length];
      const b = numbers[(currentIndex + 1) % numbers.length];
      const c = numbers[(currentIndex + 2) % numbers.length];
  
      leftSpan.textContent = a;
      middleSpan.textContent = b;
      rightSpan.textContent = c;
    }
  
    function animatePagination() {
      // Reset animation
      fill.style.animation = 'none';
      void fill.offsetWidth;
      fill.style.animation = 'fillLine 3s linear forwards';
  
      setTimeout(() => {
        currentIndex = (currentIndex + 1) % numbers.length;
        updateNumbers();
        animatePagination();
      }, 3000);
    }
  
    updateNumbers();
    animatePagination();
  });
document.addEventListener('DOMContentLoaded', () => {
    const leftSpan = document.querySelector('.number.left');
    const middleSpan = document.querySelector('.number.middle');
    const rightSpan = document.querySelector('.number.right');
    const fill = document.querySelector('.progress-fill');
    const header = document.querySelector('.header');
    const headerTitle = document.querySelector('.header-title');
    
    let headerData = [];
    let currentIndex = 0;

    // Fetch the JSON data
    fetch('./headerData.json')
        .then(response => response.json())
        .then(data => {
            headerData = data;
            initializePagination();
        })
        .catch(error => console.error('Error loading header data:', error));

    function initializePagination() {
        updateHeaderContent();
        animatePagination();
    }

    function updateHeaderContent() {
        // Update background image
        header.style.backgroundImage = `url(${headerData[currentIndex].backgroundImage})`;
        
        // Update title
        headerTitle.textContent = headerData[currentIndex].title;
    }

    function updateNumbers() {
        const totalItems = headerData.length;
        const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
        const nextIndex = (currentIndex + 1) % totalItems;

        leftSpan.textContent = headerData[prevIndex].id;
        middleSpan.textContent = headerData[currentIndex].id;
        rightSpan.textContent = headerData[nextIndex].id;
    }

    function animatePagination() {
        // Reset animation
        fill.style.animation = 'none';
        void fill.offsetWidth; // Trigger reflow
        fill.style.animation = 'fillLine 3s linear forwards';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % headerData.length;
            updateHeaderContent();
            updateNumbers();
            animatePagination();
        }, 3000);
    }
});
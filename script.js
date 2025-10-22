document.addEventListener('DOMContentLoaded', () => {
    const galleryItems = document.querySelectorAll('.artwork-item:not(.placeholder)');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');

    // Lightbox Functionality
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const imgSrc = item.getAttribute('data-image');
            const imgTitle = item.getAttribute('data-title');
            
            lightbox.style.display = 'block';
            lightboxImg.src = imgSrc;
            lightboxCaption.innerHTML = imgTitle;
        });
    });

    // Close Lightbox on 'x' click
    closeBtn.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close Lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Close Lightbox on ESC key press
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.style.display === 'block') {
            lightbox.style.display = 'none';
        }
    });
});

/*
    To make this truly functional:

    1. CREATE FOLDERS:
       - 'images/' folder where you put all your flyer and logo images.
    
    2. UPDATE HTML:
       - For every artwork item, you must replace:
         'path/to/Flash sale Oct 1st.jpg' with 'images/Flash sale Oct 1st.jpg'
       - Make sure you list all 23 flyers in the HTML structure.
*/
// Homepage Video Modal Functionality
(function() {
    const modal = document.getElementById('videoModal');
    const modalVideo = document.getElementById('modalVideo');
    const modalBackdrop = modal.querySelector('.modal-backdrop');
    const modalClose = modal.querySelector('.modal-close');
    const videoCards = document.querySelectorAll('.video-card');

    // Open modal when clicking a video card
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoId = card.dataset.videoId;
            if (videoId && videoId !== 'VIDEO_ID') {
                modalVideo.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Close modal functions
    function closeModal() {
        modal.classList.remove('active');
        modalVideo.src = '';
        document.body.style.overflow = '';
    }

    modalBackdrop.addEventListener('click', closeModal);
    modalClose.addEventListener('click', closeModal);

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    // Handle placeholder thumbnails gracefully
    document.querySelectorAll('.video-thumbnail img').forEach(img => {
        img.addEventListener('error', function() {
            // Replace with a placeholder if thumbnail fails to load
            this.style.display = 'none';
            this.parentElement.style.background = 'linear-gradient(135deg, #2a2a2a 0%, #1a1a1a 100%)';
        });
    });
})();

// --- Interactive Lightbox Modal for Screenshots ---
document.addEventListener('DOMContentLoaded', () => {
    // 1. Create Modal Container DOM
    const modalStyles = `
        .lightbox-modal {
            display: none;
            position: fixed;
            z-index: 9999;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.88);
            backdrop-filter: blur(8px);
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .lightbox-modal.active {
            display: flex;
            opacity: 1;
        }
        .lightbox-content {
            max-width: 90%;
            max-height: 85vh;
            border-radius: 12px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
            transform: scale(0.9);
            transition: transform 0.3s ease;
            object-fit: contain;
        }
        .lightbox-modal.active .lightbox-content {
            transform: scale(1);
        }
        .lightbox-close {
            position: absolute;
            top: 20px;
            right: 30px;
            color: #ffffff;
            font-size: 36px;
            font-weight: bold;
            cursor: pointer;
            user-select: none;
            transition: color 0.2s ease;
        }
        .lightbox-close:hover {
            color: #6C5CE7;
        }
        .screenshot img, .screenshot {
            cursor: pointer;
        }
    `;

    const styleEl = document.createElement('style');
    styleEl.innerHTML = modalStyles;
    document.head.appendChild(styleEl);

    const modalEl = document.createElement('div');
    modalEl.className = 'lightbox-modal';
    modalEl.id = 'lightboxModal';
    modalEl.innerHTML = `
        <span class="lightbox-close" id="lightboxClose">&times;</span>
        <img class="lightbox-content" id="lightboxImg" alt="Enlarged screenshot">
    `;
    document.body.appendChild(modalEl);

    const modalImg = document.getElementById('lightboxImg');
    const modalClose = document.getElementById('lightboxClose');

    // 2. Attach click handlers to all screenshot images
    const screenshots = document.querySelectorAll('.screenshot img');
    screenshots.forEach(img => {
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            modalImg.src = img.src;
            modalImg.alt = img.alt || 'Screenshot';
            modalEl.classList.add('active');
        });
    });

    // 3. Close modal handlers
    const closeModal = () => {
        modalEl.classList.remove('active');
    };

    modalClose.addEventListener('click', closeModal);
    modalEl.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });
});

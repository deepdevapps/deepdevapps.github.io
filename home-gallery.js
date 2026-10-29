// Shared, manually controlled screenshot gallery. No automatic rotation.
document.querySelectorAll('[data-game-gallery]').forEach(gallery => {
    const cards = [...gallery.querySelectorAll('[data-gallery-card]')];
    const topics = [...gallery.querySelectorAll('[data-gallery-index]')];
    const status = gallery.querySelector('[data-gallery-status]');
    const dialog = gallery.querySelector('dialog');
    const enlarged = dialog.querySelector('img');
    const dialogTitle = dialog.querySelector('[data-dialog-title]');
    const stage = gallery.querySelector('[data-gallery-stage]');
    let current = 0;
    let pointerStart = null;
    let suppressClickUntil = 0;

    function render() {
        cards.forEach((card, index) => {
            let offset = (index - current + cards.length) % cards.length;
            if (offset > cards.length / 2) offset -= cards.length;
            card.style.setProperty('--offset', offset);
            card.style.setProperty('--depth', Math.abs(offset));
            card.classList.toggle('is-current', index === current);
            card.setAttribute('aria-current', index === current ? 'true' : 'false');
        });
        topics.forEach((button, index) => button.setAttribute('aria-pressed', String(index === current)));
        const image = cards[current].querySelector('img');
        status.textContent = `${String(current + 1).padStart(2, '0')} / 05 · ${cards[current].dataset.title}`;
        if (dialog.open) {
            enlarged.src = cards[current].href;
            enlarged.alt = image.alt;
            dialogTitle.textContent = status.textContent;
        }
    }

    function select(index) {
        current = (index + cards.length) % cards.length;
        render();
    }

    gallery.querySelectorAll('[data-gallery-step]').forEach(button => {
        button.addEventListener('click', () => select(current + Number(button.dataset.galleryStep)));
    });
    topics.forEach((button, index) => button.addEventListener('click', () => select(index)));
    cards.forEach((card, index) => card.addEventListener('click', event => {
        event.preventDefault();
        if (Date.now() < suppressClickUntil) return;
        if (index !== current) {
            select(index);
            return;
        }
        enlarged.src = card.href;
        enlarged.alt = card.querySelector('img').alt;
        dialogTitle.textContent = status.textContent;
        dialog.showModal();
        document.body.classList.add('gallery-open');
    }));

    dialog.querySelector('[data-dialog-close]').addEventListener('click', () => dialog.close());
    dialog.addEventListener('close', () => document.body.classList.remove('gallery-open'));
    dialog.addEventListener('click', event => {
        if (event.target !== dialog) return;
        const bounds = dialog.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
    });
    gallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        select(current + (event.key === 'ArrowRight' ? 1 : -1));
    });
    stage.addEventListener('pointerdown', event => {
        if (event.button !== 0) return;
        pointerStart = { x: event.clientX, y: event.clientY, id: event.pointerId };
    });
    stage.addEventListener('pointerup', event => {
        if (!pointerStart || pointerStart.id !== event.pointerId) return;
        const dx = event.clientX - pointerStart.x;
        const dy = event.clientY - pointerStart.y;
        pointerStart = null;
        if (Math.abs(dx) < 40 || Math.abs(dx) < Math.abs(dy)) return;
        suppressClickUntil = Date.now() + 400;
        select(current + (dx < 0 ? 1 : -1));
    });
    stage.addEventListener('pointercancel', () => { pointerStart = null; });
    gallery.classList.add('is-enhanced');
    gallery.querySelectorAll('[data-gallery-controls]').forEach(controls => { controls.hidden = false; });
    render();
});

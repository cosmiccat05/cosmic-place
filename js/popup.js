import { $, $$ } from './utils.js';

const TRIGGERS = [
    { buttonId: '#open-contact', modalId: '#contact-modal' },
    { buttonId: '#open-blog', modalId: '#blog-modal' },
];

function openModal(modal) {
    modal.classList.add('is-open');
}

function closeModal(modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

export function initModals() {
    TRIGGERS.forEach(({ buttonId, modalId }) => {
        const button = $(buttonId);
        const modal = $(modalId);
        if (!button || !modal) return;

        button.addEventListener('click', () => openModal(modal));
    });

    $$('.modal').forEach((modal) => {
        const closeBtn = $('.close-modal', modal);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }

        modal.addEventListener('click', (event) => {
            if (event.target === modal) closeModal(modal);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        $$('.modal.is-open').forEach(closeModal);
    });
}
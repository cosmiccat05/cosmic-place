// popup.js — abrir/cerrar los modales (contact-modal, blog-modal)
import { $, $$ } from './utils.js';

const TRIGGERS = [
    { buttonId: '#open-contact', modalId: '#contact-modal' },
    { buttonId: '#open-blog', modalId: '#blog-modal' },
];

function openModal(modal) {
    modal.classList.add('is-open');
    document.body.style.overflow = 'hidden'; // evita el scroll de fondo con el modal abierto
}

function closeModal(modal) {
    modal.classList.remove('is-open');
    document.body.style.overflow = '';
}

export function initModals() {
    // botones que abren cada modal
    TRIGGERS.forEach(({ buttonId, modalId }) => {
        const button = $(buttonId);
        const modal = $(modalId);
        if (!button || !modal) return;

        button.addEventListener('click', () => openModal(modal));
    });

    $$('.modal').forEach((modal) => {
        // botón "X"
        const closeBtn = $('.close-modal', modal);
        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeModal(modal));
        }

        // click afuera del modal-content (en el fondo oscuro) también cierra
        modal.addEventListener('click', (event) => {
            if (event.target === modal) closeModal(modal);
        });
    });

    // tecla Escape cierra cualquier modal abierto
    document.addEventListener('keydown', (event) => {
        if (event.key !== 'Escape') return;
        $$('.modal.is-open').forEach(closeModal);
    });
}
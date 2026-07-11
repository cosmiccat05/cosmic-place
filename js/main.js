// main.js — punto de entrada, arranca todo lo demás
import { initQuoteWidget } from './quote.js';
import { initModals } from './popup.js';

document.addEventListener('DOMContentLoaded', () => {
    initQuoteWidget();
    initModals();
});
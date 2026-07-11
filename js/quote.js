// quote.js — widget de "Daily quotes"
import { $, fetchJSON, randomItem } from './utils.js';

const QUOTES_URL = 'assets/quotes.json'; // ajustá esta ruta si quotes.json no está en la raíz del proyecto

let quotes = [];
let lastIndex = -1;

function renderQuote(quoteObj) {
    const quoteEl = $('#quote');
    const authorEl = $('#author');
    if (!quoteEl || !authorEl) return;

    quoteEl.textContent = `"${quoteObj.quote}"`;
    authorEl.textContent = `— ${quoteObj.author}`;
}

function showNewQuote() {
    if (!quotes.length) return;
    const { item, index } = randomItem(quotes, lastIndex);
    lastIndex = index;
    renderQuote(item);
}

async function loadQuotes() {
    try {
        quotes = await fetchJSON(QUOTES_URL);
        showNewQuote();
    } catch (error) {
        console.error(error);
        const quoteEl = $('#quote');
        if (quoteEl) quoteEl.textContent = 'No pude cargar las frases justo ahora :(';
    }
}

export function initQuoteWidget() {
    const button = $('.btn-quote');
    if (button) {
        button.addEventListener('click', showNewQuote);
    }
    loadQuotes();
}
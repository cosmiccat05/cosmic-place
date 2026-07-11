// utils.js — funciones chiquitas que se repiten en otros módulos

/** Atajo para document.querySelector */
export const $ = (selector, scope = document) => scope.querySelector(selector);

/** Atajo para document.querySelectorAll, pero devuelve un array de verdad */
export const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

/** Trae y parsea un JSON, tirando un error legible si algo falla */
export async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`No se pudo cargar ${url}: ${response.status}`);
    }
    return response.json();
}

/**
 * Devuelve un elemento random de un array.
 * Si le pasás excludeIndex, evita repetir el mismo índice dos veces seguidas
 * (útil para el botón de "New quote").
 */
export function randomItem(array, excludeIndex = -1) {
    if (array.length <= 1) return { item: array[0], index: 0 };

    let index;
    do {
        index = Math.floor(Math.random() * array.length);
    } while (index === excludeIndex);

    return { item: array[index], index };
}
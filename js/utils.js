export const $ = (selector, scope = document) => scope.querySelector(selector);

export const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

export async function fetchJSON(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`No se pudo cargar ${url}: ${response.status}`);
    }
    return response.json();
}

export function randomItem(array, excludeIndex = -1) {
    if (array.length <= 1) return { item: array[0], index: 0 };

    let index;
    do {
        index = Math.floor(Math.random() * array.length);
    } while (index === excludeIndex);

    return { item: array[index], index };
}
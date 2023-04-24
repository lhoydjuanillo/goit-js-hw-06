const decrementBtn = document.querySelector('[data-action= "decrement"]');
const incrementBtn = document.querySelector('[data-action= "increment"]');
const valueEl = document.querySelector('#value');

let counter = 0;

decrementBtn.addEventListener('click', () => {
    counter--;
    valueEl.innerHTML = counter;
});

incrementBtn.addEventListener('click', () => {
    counter++;
    valueEl.innerHTML = counter;
});
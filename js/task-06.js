const inputEl = document.querySelector('#validation-input');
const validLength = inputEl.dataset.length;
const maxLength = parseInt(validLength);



inputEl.addEventListener('input', () => {
    if (inputEl.value.length === maxLength) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.remove('valid');
        inputEl.classList.add('invalid');
    }
});

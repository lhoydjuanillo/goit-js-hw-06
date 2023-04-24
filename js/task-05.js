const nameEl = document.getElementById('name-input');
const outputEl = document.getElementById('name-output');



nameEl.addEventListener('input', () => {
    const emptyStr = nameEl.value.trim();
    if (emptyStr === "") {
        outputEl.innerHTML = "Anonymous";
    } else {
    outputEl.innerHTML = nameEl.value;
    }
    
});



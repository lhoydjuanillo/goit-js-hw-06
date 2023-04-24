const sizeCOntrollerEl = document.querySelector('#font-size-control');
const fontOutputEl =  document.getElementById('text');


sizeCOntrollerEl.addEventListener('input', (event) => {
    fontOutputEl.style.fontSize = sizeCOntrollerEl.value + 'px'; 
});
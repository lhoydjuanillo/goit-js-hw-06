const colorCode = document.querySelector('.color');
const colorChange = document.querySelector('.change-color');


  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
colorChange.addEventListener('click', (event) => {
  let color = getRandomHexColor();
  document.body.style.background = color;
  colorCode.textContent = color;
});
 
 
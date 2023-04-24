const numberOfCategorytEl = document.querySelectorAll('.item');
console.log(`Number of Categories: ${numberOfCategorytEl.length}`);
console.log("");

numberOfCategorytEl.forEach(element => {
    const categories = element.querySelector('h2');
    console.log(`Category: ${categories.textContent}`);
    const categoriesEl = element.querySelectorAll('li');
    console.log(`Elements: ${categoriesEl.length}`);
});




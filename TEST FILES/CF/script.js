const btn = document.querySelector("#button");
const bod = document.querySelector('body');
const rang = [
    '#FF5733', // Coral
    '#8A2BE2', // Blue Violet
    '#3CB371', // Medium Sea Green
    '#FFD700', // Gold
    '#4169E1', // Royal Blue
    '#FF6347', // Tomato
    '#800080', // Purple
    '#20B2AA', // Light Sea Green
    '#FF4500', // Orange Red
    '#6495ED'  // Cornflower Blue
  ];


btn.addEventListener("click", () => {
    ranColors = Math.floor(Math.random() * rang.length);
    randomColor = rang[ranColors];
    bod.style.backgroundColor = randomColor;
    console.log("clicked");
    console.log(randomColor);
})
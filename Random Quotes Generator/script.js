const output = document.querySelector(".content");
const btn = document.querySelector(".button");

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the midst of chaos, there is also opportunity. - Sun Tzu",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
    "The best way to predict the future is to invent it. - Alan Kay"
];

btn.addEventListener("click", () => {
    randomQuote = Math.floor(Math.random() * quotes.length);
    output.innerHTML = randomQuote[quotes];
    console.log(randomQuote);
});
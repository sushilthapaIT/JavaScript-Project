const result = document.querySelector(".output");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
    // Lowercase letters
const lowercaseLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Uppercase letters
const uppercaseLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

// Symbols
const symbols = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '[', ']', '{', '}', '|', '\\', ':', ';', '"', '\'', '<', '>', ',', '.', '?', '/'];

    randomSymbol = Math.floor(Math.random() * symbols.length);
    randomLowerAlphabet = Math.floor(Math.random() * lowercaseLetters.length);
    randomUpperAlphabet = Math.floor(Math.random() * uppercaseLetters.length);

    result.innerHTML = (randomSymbol + symbols[randomSymbol] + lowercaseLetters[randomLowerAlphabet] + uppercaseLetters[randomUpperAlphabet] +  randomLowerAlphabet + randomSymbol + uppercaseLetters[randomUpperAlphabet] + uppercaseLetters[randomUpperAlphabet] + lowercaseLetters[randomLowerAlphabet]);
    
})




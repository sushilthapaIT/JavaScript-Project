const result = document.querySelector(".output");
const btn = document.querySelector(".button");

btn.addEventListener("click", () => {
    const symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "+", ".", "_"]
    const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    randomSymbol = Math.floor(Math.random() * symbols.length);
    randomLowerAlphabet = Math.floor(Math.random() * lowercaseAlphabet.length);
    randomUpperAlphabet = Math.floor(Math.random() * uppercaseAlphabet.length);

    result.innerHTML = (randomSymbol + symbols[randomSymbol] + lowercaseAlphabet[randomLowerAlphabet] + uppercaseAlphabet[randomUpperAlphabet] +  randomLowerAlphabet + randomSymbol + uppercaseAlphabet[randomUpperAlphabet] + uppercaseAlphabet[randomUpperAlphabet] + lowercaseAlphabet[randomLowerAlphabet]);
    
})




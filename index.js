const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


let btn = document.getElementById('btn')
let passwordLength = 12;
let boxOne = document.querySelector(".boxOne")
let boxTwo = document.querySelector(".boxTwo")

function getRandChars() {
    let randChar = Math.floor(Math.random() * characters.length)
    return characters[randChar];
}


function generateRand() {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += getRandChars();
    }
    return password;
}

function displayPasswords() {
    boxOne.textContent = generateRand();
    boxTwo.textContent = generateRand();
}

const texts = ["click the icons below to play games and to check out my projects"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector(".myName").textContent = letter;
    if(letter.length === currentText.length) {
        count++;
        
       
    }
    setTimeout(type, 10);
})();
const texts = ["a little about me. i'm a full stack developer in the philadelphia area. i'm a nucamp graduate. below are some of the languages that i've learned during bootcamp."];
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

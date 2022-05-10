const texts = ["hello, i'm calvin chung"];
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
        // index = 0;
        
       
    }
    setTimeout(type, 150);
})();




const panels = document.querySelectorAll('.panel');

    function toggleOpen() {
      this.classList.toggle('open');
      
    }

    function toggleActive(e) {
      console.log(e.propertyName);
      if(e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
      }
    }

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

    const swup = new Swup()

    function timeRefresh(timeoutPeriod) {
      setTimeout("location.reload(true);", timeoutPeriod);
    }
    window.onload = timeRefresh(5000);
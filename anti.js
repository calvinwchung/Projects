const theHoodie = document.querySelectorAll('.hoodie');
const theShirt = document.querySelectorAll('.shirt');
const thePants = document.querySelectorAll('.pants');
const theHat = document.querySelectorAll('.hat');
const theBaby = document.querySelectorAll('.baby');

function clickHoodie () {
    theShirt.forEach(shirt => {
        shirt.remove();
    });

    thePants.forEach(pants => {
        pants.remove();
    });

    theHat.forEach(hat => {
        hat.remove();
    });

    theBaby.forEach(baby => {
        baby.remove();
    });
}

function clickShirt () {
    theHoodie.forEach(hoodie => {
        hoodie.remove();
    });

    thePants.forEach(pants => {
        pants.remove();
    });

    theHat.forEach(hat => {
        hat.remove();
    });

    theBaby.forEach(baby => {
        baby.remove();
    });
}

function clickPants () {
    theHoodie.forEach(hoodie => {
        hoodie.remove();
    });

    theShirt.forEach(shirt => {
        shirt.remove();
    });

    theHat.forEach(hat => {
        hat.remove();
    });

    theBaby.forEach(baby => {
        baby.remove();
    });
}

function clickHats () {
    theHoodie.forEach(hoodie => {
        hoodie.remove();
    });

    theShirt.forEach(shirt => {
        shirt.remove();
    });

    thePants.forEach(pants => {
        pants.remove();
    });

    theBaby.forEach(baby => {
        baby.remove();
    });
}

$(function() {
    $("#loginButton").on("click", function() {
        $("#loginModal").modal('show');
    });
});




// var theShirts = document.getElementById('shirt');
// var theHoodies = document.getElementById('hoodie');
// var theHoodies3 = document.getElementById('hoodie3');
// var theHoodies4 = document.getElementById('hoodie4');
// var theHoodies5 = document.getElementById('hoodie5');
// var theHoodies6 = document.getElementById('hoodie6');
// var theHoodies7 = document.getElementById('hoodie7');
// var theHoodies8 = document.getElementById('hoodie8');
// var theHat = document.getElementById('hat');
// var theHat2 = document.getElementById('hat2');
// var theHat3 = document.getElementById('hat3');
// var theHat4 = document.getElementById('hat4');
// var theHat5 = document.getElementById('hat5')
// var thePants = document.getElementById('pants');
// var theBaby = document.getElementById('baby');
// var theShirt2 = document.getElementById('shirt2');
// var theShirt3 = document.getElementById('shirt3');
// var theShirt4 = document.getElementById('shirt4');
// var theFirstRow = document.getElementsById('firstRow');

//     theHoodies.remove();
//     theShirts.remove();
//     theHat.remove();
//     thePants.remove();
//     theShirt2.remove();
//     theShirt4.remove();
//     theHat2.remove();
//     theShirt3.remove();
//     theHoodies3.remove();
//     theHoodies4.remove();
//     theHat5.remove();
//     theHat3.remove();
//     theHoodies5.remove();
//     theHoodies6.remove();
//     theHoodies7.remove();
//     theHat4.remove();
//     theHoodies8.remove();
//     theBaby.remove();

// function clickShirt () {
//     theHoodies.remove();
//     theHat.remove();
//     thePants.remove();
//     theHat2.remove();
//     theHoodies3.remove();
//     theHoodies4.remove();
//     theHat5.remove();
//     theHat3.remove();
//     theHoodies5.remove();
//     theHoodies6.remove();
//     theHoodies7.remove();
//     theHat4.remove();
//     theHoodies8.remove();
//     theBaby.remove();
// }

// function clickHoodie () {
//     theHat.remove();
//     thePants.remove();
//     theHat2.remove();
//     theHat3.remove();
//     theHat4.remove();
//     theBaby.remove();
//     theHat5.remove();
//     theShirts.remove();
//     theShirt2.remove();
//     theShirt3.remove();
//     theShirt4.remove();
// }

// function clickPants () {
//     theHoodies.remove();
//     theShirts.remove();
//     theHat.remove();
//     theShirt2.remove();
//     theShirt4.remove();
//     theHat2.remove();
//     theShirt3.remove();
//     theHoodies3.remove();
//     theHoodies4.remove();
//     theHat5.remove();
//     theHat3.remove();
//     theHoodies5.remove();
//     theHoodies6.remove();
//     theHoodies7.remove();
//     theHat4.remove();
//     theHoodies8.remove();
//     theBaby.remove();
// }

// function clickHats () {
//     theHoodies.remove();
//     theShirts.remove();
//     thePants.remove();
//     theShirt2.remove();
//     theShirt4.remove();
//     theShirt3.remove();
//     theHoodies3.remove();
//     theHoodies4.remove();
//     theHoodies5.remove();
//     theHoodies6.remove();
//     theHoodies7.remove();
//     theHoodies8.remove();
//     theBaby.remove();
// }
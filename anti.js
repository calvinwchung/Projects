const theHoodie = document.querySelectorAll('.hoodie');
const theShirt = document.querySelectorAll('.shirt');
const thePants = document.querySelectorAll('.pants');
const theHat = document.querySelectorAll('.hat');
const theBaby = document.querySelectorAll('.baby');
// const theAdults = document.querySelectorAll('.adults');
// const theKids = document.querySelectorAll('.kids');
// const theBSellers = document.querySelectorAll('.bestSellers')

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

$(function() {
    $("#contactButton").on("click", function() {
        $("#contactModal").modal('show');
    });
});

$(function() {
    $("#aboutButton").on("click", function() {
        $("#aboutModal").modal('show');
    });
});



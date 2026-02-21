// COUNTDOWN

var weddingDate = new Date("December 12, 2026 00:00:00").getTime();

var timer = setInterval(function(){

var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(distance / (1000*60*60*24));

var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));

var minutes = Math.floor((distance % (1000*60*60)) / (1000*60));

document.getElementById("countdown").innerHTML =
days + " days " + hours + " hours " + minutes + " minutes";

},1000);


// COPY NUMBER

function copyNumber(number){

navigator.clipboard.writeText(number);

alert("Number copied successfully!");

}


// SCROLL

function scrollToSupport(){

document.querySelector(".support").scrollIntoView({

behavior: "smooth"

});

}
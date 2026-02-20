function copyNumber(number){
navigator.clipboard.writeText(number);
alert("Number copied");
}

var weddingDate = new Date("December 12, 2026 00:00:00");

var x = setInterval(function(){

var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));

document.getElementById("countdown").innerHTML =
days + " days to go";

},1000);
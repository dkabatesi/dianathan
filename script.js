var weddingDate = new Date("December 12, 2026 00:00:00").getTime();

setInterval(function(){

var now = new Date().getTime();
var distance = weddingDate - now;

var days = Math.floor(distance/(1000*60*60*24));
var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));
var minutes = Math.floor((distance%(1000*60*60))/(1000*60));

document.getElementById("countdown").innerHTML =
days+" days "+hours+" hrs "+minutes+" min";

},1000);


function copyNumber(number){
navigator.clipboard.writeText(number);
alert("Number copied successfully");
}


// Initialize animations
AOS.init({
once: true,
duration: 1000
});
function openInvitation(){

document.getElementById("opening").style.display="none";

document.getElementById("main").style.display="block";

}



function copyNumber(number){

navigator.clipboard.writeText(number);

alert("Number copied");

}



var weddingDate = new Date("December 12, 2026").getTime();


setInterval(function(){

var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(distance/(1000*60*60*24));

document.getElementById("countdown").innerHTML =
days + " days remaining";

},1000);
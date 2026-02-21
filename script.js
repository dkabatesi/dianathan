function openInvitation(){

document.getElementById("opening").style.display="none";

document.getElementById("main").style.display="block";

}



function copyNumber(number){

navigator.clipboard.writeText(number);

alert("Thank you for Supporting Us");

}



var weddingDate = new Date("December 12, 2026").getTime();


setInterval(function(){

var now = new Date().getTime();

var distance = weddingDate - now;

var days = Math.floor(distance/(1000*60*60*24));

var hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60));

var minutes = Math.floor((distance%(1000*60*60))/(1000*60));


document.getElementById("countdown").innerHTML =
days+" days "+hours+" hours "+minutes+" minutes";


},1000);
function openInvitation(){

document.getElementById("envelope").style.display="none";

document.getElementById("invitation").classList.remove("hidden");

document.getElementById("music").play();

startCountdown();

}

function toggleMusic(){

let music=document.getElementById("music");

if(music.paused){
music.play();
}else{
music.pause();
}

}

function startCountdown(){

let date=new Date("Dec 20, 2026 15:00:00").getTime();

setInterval(function(){

let now=new Date().getTime();

let gap=date-now;

let days=Math.floor(gap/(1000*60*60*24));

let hours=Math.floor((gap%(1000*60*60*24))/(1000*60*60));

let minutes=Math.floor((gap%(1000*60*60))/(1000*60));

let seconds=Math.floor((gap%(1000*60))/1000);

document.getElementById("countdown").innerHTML=
days+"d "+hours+"h "+minutes+"m "+seconds+"s";

},1000);

}
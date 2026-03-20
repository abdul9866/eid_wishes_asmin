let audio;

/* LOAD */
window.addEventListener("load", () => {

audio = document.getElementById("song");

/* restore time */
let savedTime = localStorage.getItem("musicTime");
if(savedTime){
audio.currentTime = parseFloat(savedTime);
}

/* auto play if already started */
if(localStorage.getItem("musicPlaying") === "true"){
audio.play().catch(()=>{});
}

/* keep saving time */
setInterval(()=>{
if(audio && !audio.paused){
localStorage.setItem("musicTime", audio.currentTime);
}
},300);

});
function toggleMusic(){

let audio = document.getElementById("song");

/* check if music never started before */
let isStarted = localStorage.getItem("musicStarted");

if(!isStarted){
audio.currentTime = 0; // start from beginning
localStorage.setItem("musicStarted","true");
}

/* play / pause toggle */
if(audio.paused){
audio.play();
localStorage.setItem("musicPlaying","true");
}else{
audio.pause();
localStorage.setItem("musicPlaying","false");
}

}


function goNext(){
window.location.href = "surprise.html";
}

function goFinal(){
window.location.href = "final.html";
}

function restart(){
window.location.href = "index.html";
}

function openGift(){

document.querySelector(".giftBox").classList.add("open");

setTimeout(function(){

window.location.href="surprise.html";

},1200);

}

function finalPage(){
window.location.href="final.html";
}

function replay(){
window.location.href="index.html";
}

/* TYPEWRITER MESSAGE */

const text="Allah tumhare is Ramzan ke saare roze aur ibadat qubool kare, tumhari har dua ko kabul farmaaye aur tumhari zindagi ko hamesha khushiyon se bhar de. Dil se dua karta hoon ki tumhari zindagi mein kabhi koi gham na aaye, aur tum hamesha isi tarah muskuraati raho…. Eid Mubarak Asmin ✨💫";

let i=0;

function typeWriter(){

if(i<text.length){

document.getElementById("typeText").innerHTML+=text.charAt(i);

i++;

setTimeout(typeWriter,50);

}

}

if(document.getElementById("typeText")){
typeWriter();
}

/* SPARKLES */

let sparkleLimit=0;

document.addEventListener("mousemove",function(e){

if(sparkleLimit>20) return;

sparkleLimit++;

let sparkle=document.createElement("div");

sparkle.style.position="absolute";
sparkle.style.width="6px";
sparkle.style.height="6px";
sparkle.style.background="gold";
sparkle.style.borderRadius="50%";

sparkle.style.left=e.pageX+"px";
sparkle.style.top=e.pageY+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();
sparkleLimit--;

},500);

});

/* FIREWORKS */

const canvas=document.getElementById("fireworks");

if(canvas){

const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

function firework(){

let x=Math.random()*canvas.width;
let y=Math.random()*canvas.height;

ctx.fillStyle="gold";

ctx.beginPath();
ctx.arc(x,y,3,0,Math.PI*2);
ctx.fill();

}

setInterval(firework,300);

}

function openGift(){

const gift=document.querySelector(".giftBox");

/* 1. Slight shake */
gift.style.transition="0.2s";
gift.style.transform="scale(1.1) rotate(3deg)";

/* 2. Spark explosion */
for(let i=0;i<25;i++){

let spark=document.createElement("div");
spark.className="spark";

spark.style.left=(gift.offsetLeft+60)+"px";
spark.style.top=(gift.offsetTop+60)+"px";

/* random directions */
spark.style.setProperty('--x',(Math.random()*300-150)+'px');
spark.style.setProperty('--y',(Math.random()*300-150)+'px');

document.body.appendChild(spark);

/* remove after animation */
setTimeout(()=>spark.remove(),800);
}

/* 3. Flash screen */
const flash=document.getElementById("flash");

setTimeout(()=>{
flash.style.opacity="1";
},200);

/* 4. Transition to next page */
setTimeout(()=>{
window.location.href="surprise.html";
},900);

}


document.querySelector(".final-image img")?.addEventListener("click",function(){

for(let i=0;i<20;i++){

let spark=document.createElement("div");
spark.className="spark";

spark.style.left=this.offsetLeft+100+"px";
spark.style.top=this.offsetTop+100+"px";

spark.style.setProperty('--x',(Math.random()*200-100)+'px');
spark.style.setProperty('--y',(Math.random()*200-100)+'px');

document.body.appendChild(spark);

setTimeout(()=>spark.remove(),800);
}
});

function swapImage(clickedImg){

const mainImage = document.getElementById("mainImage");

/* store current main image */
let tempSrc = mainImage.src;

/* animation */
mainImage.style.opacity = "0";
clickedImg.style.opacity = "0";

setTimeout(()=>{

/* swap sources */
mainImage.src = clickedImg.src;
clickedImg.src = tempSrc;

/* fade back */
mainImage.style.opacity = "1";
clickedImg.style.opacity = "1";

},200);

}
window.addEventListener("load", () => {

let audio = document.getElementById("song");

let isPlaying = localStorage.getItem("musicPlaying");
let savedTime = localStorage.getItem("musicTime");

/* ONLY restore if already started */
if(localStorage.getItem("musicStarted") === "true"){

if(savedTime){
audio.currentTime = parseFloat(savedTime);
}

if(isPlaying === "true"){
audio.play().catch(()=>{});
}

}

/* keep saving */
setInterval(()=>{
if(audio && !audio.paused){
localStorage.setItem("musicTime", audio.currentTime);
}
},300);

});

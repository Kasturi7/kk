var randomNumber1 = Math.floor(Math.random()*6)+1
var images = "./dice" + randomNumber1 + ".png"
document.querySelectorAll("img")[0].setAttribute("src", images)


var randomNumber2 = Math.floor(Math.random()*6)+1
var images2 = "./dice" + randomNumber2 +".png"
document.querySelectorAll("img")[1].setAttribute("src", images2)
















/* for (i=1; i<7; i++){
    var randomNumber1 = Math.round(Math.random()*i)
}
if (randomNumber1 === 1){
    document.querySelector(".img1").setAttribute("src","./images/dice1.png")
}
if (randomNumber1 === 2){
    document.querySelector(".img1").setAttribute("src","/images/dice2.png")
}
if (randomNumber1 === 3){
    document.querySelector(".img1").setAttribute("src","/images/dice3.png")
}
if (randomNumber1 === 4){
    document.querySelector(".img1").setAttribute("src","/images/dice4.png")
}
if (randomNumber1 === 5){
    document.querySelector(".img1").setAttribute("src","/images/dice5.png")
}
if (randomNumber1 === 6){
    document.querySelector(".img1").setAttribute("src","/images/dice6.png")
}
for (j=1; j<7; j++){
    var randomNumber2 = Math.round(Math.random()*j)
}
if (randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src","./images/dice1.png")
}
if (randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src","/images/dice2.png")
}
if (randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src","/images/dice3.png")
}
if (randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src","/images/dice4.png")
}
if (randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src","/images/dice5.png")
}
if (randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src","/images/dice6.png")
} */

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "🚩Player 1 wins!"
}
if (randomNumber1 < randomNumber2){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩"
}
if (randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Draw!"
}

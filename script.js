let audio = new Audio("sound/index-back.mp3")
window.addEventListener("DOMContentLoaded",()=>{
    audio.volume=0.03
    audio.play()
})

audio.addEventListener("ended",()=>{
    audio.currentTime=0
    audio.play()
})


var player1name = "Naruto"
var player2name = "Sasuke"
function start(){
    player1name = document.getElementById("player1name").value
    player2name = document.getElementById("player2name").value
    window.location.href="battle.html"
}

let player1Hp_container = document.getElementById("player1Hp")
let player2Hp_container = document.getElementById("player2Hp")

let rasengan_attack = document.getElementById("rasengan-attack")
let fireball_attack = document.getElementById("fireball-attack")

let p1name_container = document.getElementById("Player1Name")
let p2name_container = document.getElementById("Player2Name")


let fire_n = document.getElementById("fire_expo_n")
let fire_s = document.getElementById("fire_expo_s")



//Audio Used
// backgorund Audio functions
let backgorund_audio =document.getElementById("background-audio")
window.addEventListener("DOMContentLoaded", () => {
    backgorund_audio.volume = 0.03;
    backgorund_audio.play();
});

backgorund_audio.addEventListener('ended', () => {
    backgorund_audio.currentTime = 0; // Reset to the beginning
    backgorund_audio.play(); // Play again
});


// <================ Name ======================>
// const data = JSON.parse(window.name)

// if (data && data.name1 && data.name2) {
//     p1name_container.innerHTML=data.name1
//     p2name_container.innerHTML=data.name2
// }





let rasengan_audio=new Audio("sound/rasengan.mp3")
rasengan_audio.volume=0.1
let fireball_audio=new Audio("sound/fireball.mp3")
fireball_audio.volume=0.2

let player1AttackButton = document.getElementById("player1Attack")
let player2AttackButton = document.getElementById("player2Attack")


//initializing players heath & Set in html

let player1hp=100
let player2hp=100
player1Hp_container.innerHTML=player1hp
player2Hp_container.innerHTML=player2hp


//Function For Time Delay reverse animation style

function timeDelay(attacktype){
    switch (attacktype) {
        case 'r':
            rasengan_attack.style.animation="none"
            break;
        case 'f':
            fireball_attack.style.animation="none"
            break;
    
        default:
            alert("!!!! Something Wents Wrong !!!!")
            break;
    }
}


function explosion_execution(symbol){

    if(symbol=='r'){
        fire_s.play()
        fire_s.style.display="block"
    }else{
        fire_n.style.display="block"
        fire_n.play()
    }
        
}

fire_n.addEventListener("ended",()=>{
    fire_n.style.display="none"
})
fire_s.addEventListener("ended",()=>{
    fire_s.style.display="none"
})

// Rasengan Attack Function

function rasengan_execution(){
    rasengan_attack.style.animation="moveRasengan 2s linear 1 alternate"
    setTimeout(explosion_execution,2000,'r')

}

player1AttackButton.addEventListener("click",()=>{
    rasengan_audio.play()
    setTimeout(rasengan_execution,5000)
    setTimeout(timeDelay,7000,'r')
    attack('N')
    player1AttackButton.style.display="none"

})

//Fireball Attack Function

function fireball_execution(){
    fireball_attack.style.animation="moveRasengan 2s linear 1 alternate"
    setTimeout(explosion_execution,2000,'f')
}


player2AttackButton.addEventListener("click",()=>{
    fireball_audio.play()
    setTimeout(fireball_execution,3000)
    setTimeout(timeDelay,5000,'f')
    attack('s')
    player2AttackButton.style.display="none"

})





//Random Number Generator between 15-20 for attckpoint

function getRandomNumber() {
    return Math.floor(Math.random() * (20 - 15 + 1)) + 15;
}

//random chance generator
function chooseRandomChar() {
    const randomIndex = Math.floor(Math.random() * 2); 
    return randomIndex === 0 ? 'N' : 'S';
}


var continuee = 0;

//Function For Display Attack Button
function activateAttackButton(chance){
    if(chance=='N'){
        player1AttackButton.style.display="block"
    }
    else{
        player2AttackButton.style.display="block"
    }
}


// Function For Attack
function attack(chance){
    let attckpoint = getRandomNumber()
    if(chance=='N'){
        player2hp-=attckpoint
        if(player2hp>=0){
            player2Hp_container.innerHTML=player2hp
        }
        else{
            player2Hp_container.innerHTML=0
        }
        setTimeout(movechanger,6000,chance)
        // movechanger(chance)

    }

    else{
        player1hp-=attckpoint
        if(player1hp>=0){
            player1Hp_container.innerHTML=player1hp
        }
        else{
            player1Hp_container.innerHTML=0
        }
        setTimeout(movechanger,5000,chance)
        // movechanger(chance)
    }

}


//Function For Breaking Loop
function result(){
    if (player1hp<=0) {
        alert("Sasuke Wins")
        return 0
    }
    else if(player2hp <=0){
        alert("Naruto Wins")
        return 0
    }
    else{
        return 1
    }
}

function movechanger(currentplayer){
    num = result()
    if(num!=0){
        if(currentplayer == 'N'){
            activateAttackButton('S')
        }
        else{
            activateAttackButton('N')
        }
    }
}

randomchar = chooseRandomChar()
activateAttackButton(randomchar)








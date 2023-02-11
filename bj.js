let Startbtn = document.getElementsByClassName('btn')[0]
let Newbtn = document.getElementsByClassName('btn')[1]
let Cards = document.getElementsByTagName('p')[1]
let Sum = document.getElementsByTagName('p')[2]
let msg = document.getElementById('message')
let playerIn = document.getElementsByTagName('p')[3]


let started = false
let sum = 0

let player = {
    name: "Hailex",
    chips: 100
}

playerIn.textContent = `${player.name}: $${player.chips}`

Startbtn.addEventListener('click', () =>{
    started = true
    Newbtn.disabled = false
    PlayGame()
    msg.textContent = "Do you want to draw a new Card? 😊"
})

Newbtn.addEventListener('click', () =>{
    if(started){
        NewCard()
    }
})

function NewCard(){
    let NewCard = Math.floor(Math.random()*10) + 2
    Cards.textContent = Cards.textContent + "  " + NewCard
    sum = sum + NewCard
    Sum.textContent = "Sum: " + sum
    checkSum()
}

function PlayGame(){
    let firstCard = Math.floor(Math.random()*10) + 2
    let SecondCard = Math.floor(Math.random()*10) + 2
    sum = firstCard + SecondCard
    Cards.textContent = "Cards: " + firstCard + " " + SecondCard
    Sum.textContent = "Sum: " + sum
    checkSum()
}

function checkSum(){
    if (sum < 21) {
        msg.textContent = "Do you want to draw a new card? 🙂"
    
    } else if (sum === 21) {
        msg.textContent = "Wohoo! You've got Blackjack! 🥳"
        Newbtn.disabled = true
    } else {
        msg.textContent = "You're out of the game! 😭"
        Newbtn.disabled = true
    }
}
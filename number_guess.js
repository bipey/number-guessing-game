let random_num=parseInt(Math.random()*100)+1
let submit=document.querySelector("#sub")
let userGuess=document.querySelector('#guess')
let startOver=document.querySelector('.guessParas')
let previous=document.querySelector('#prev-guess')
let remaning=document.querySelector('#rem-guess')
let lower_higher=document.querySelector('#loH')
let p=document.createElement('p')
let prevGuess=[]
let noGuess=1
let playGame=true;
if(playGame){
    submit.addEventListener('click',(e)=>{
        e.preventDefault();
       let guess= parseInt(userGuess.value)
       validateGuess(guess)
    })
}
function validateGuess(guess){
    if(isNaN(guess)||guess<0||guess>100){
        alert("Please enter a valid number")
    }
    else{
        prevGuess.push(guess)
        if(noGuess==11){
            displayGuess(guess)
            displayMessage(`Game Over, Random Number was ${random_num}`)
            endGame()
        }
        else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}
function checkGuess(guess){
    if(guess==random_num){
        displayMessage("You guessed it right")
    ()
    }
    if(guess<random_num){
        displayMessage("Number is too low")
    }
    else{
        displayMessage("Number is too high")
    }
}
function displayGuess(guess){
    userGuess.value=""
    previous.innerHTML +=`${guess}, `
    noGuess++;
    remaning.innerHTML=(11-noGuess)
}
function displayMessage(msg){
lower_higher.innerHTML=`<h2> ${msg}</h2>`
}
function endGame(){
    userGuess.value=""
    userGuess.setAttribute('disabled','')
    p.classList.add("btn")
    p.innerHTML=`<H2 id="newGame">New Game</h2>`
    startOver.appendChild(p)
    playGame=false
    remaning.innerHTML='0'
    newGame()
}

function newGame(){
    let newGamebtn=document.querySelector("#newGame")
    newGamebtn.addEventListener('click',(e)=>{
        random_num=parseInt(Math.random()*100)+1
        prevGuess=[]
        noGuess=1
        previous.innerHTML=''
        remaning.innerHTML=10
        userGuess.removeAttribute('disabled')
        startOver.removeChild(p)
        playGame=true
    })
}
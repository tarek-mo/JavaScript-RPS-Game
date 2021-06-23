
// Show/Hide Modal


const closeModalBtn = document.querySelector('.close');
const showRulesBtn = document.querySelector('.rules-btn')
const rulesModal = document.querySelector('.rules-modal-container')

rulesModal.addEventListener('click', () => {
    rulesModal.classList.toggle('show')
});

showRulesBtn.addEventListener('click', () => {
    rulesModal.classList.toggle('show')
});

// Update Score when user wins
const scoreDOM = document.querySelector('.score');
let score = 0;
function updateScore() {
    score++
    scoreDOM.innerHTML = score
}



// Random Choice

const secondStepEL = document.querySelector('.game-step2')
const firstStepEL = document.querySelector('.game-step1')

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}


// Add Click event on dom choices
const choices = ['paper', 'scissors', 'rock']

let userChoice = undefined;
let computerChoice = undefined
const choicesDOM = document.querySelectorAll('.game-step1 .gradient-border');

choicesDOM.forEach(choiceDOM => {
    choiceDOM.addEventListener('click', () => {
        userChoice = choiceDOM.getAttribute('data-choice')
        
        computerChoice = pickRandomChoice();

        checkWhoWon(userChoice, computerChoice)
        
    })
})


// Check Who Won function
function checkWhoWon(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        // draw
        const result = "it's a draw"
        displayResult(userChoice, computerChoice, result)
    } 
    else if ((userChoice === 'scissors' && computerChoice === 'paper') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice ==='rock' && computerChoice === 'scissors')) {
        // user won
        updateScore()
        const result = 'you win'
        displayResult(userChoice, computerChoice, result)
        
        
    } else {
        // user lost
        const result = 'you lose'
        displayResult(userChoice, computerChoice, result)
        
    }

}

function displayResult(userChoice, computerChoice, result) {
    
    
    firstStepEL.classList.toggle('hide-step')

    secondStepEL.classList.toggle('show')
    const computerChoiceCircleEls = secondStepEL.querySelectorAll('.computer-choice .gradient-border')
    computerChoiceCircleEls.forEach(el => {
        el.classList.add(computerChoice)
        const computerChoiceImage = el.querySelector('img')
        computerChoiceImage.src = `./images/icon-${computerChoice}.svg`
        computerChoiceImage.alt = `${computerChoice} Icon`
    })


    const userChoiceCircleELS = secondStepEL.querySelectorAll('.user-choice .gradient-border')
    userChoiceCircleELS.forEach(el => {
        el.classList.add(userChoice)
        const userChoiceImage = el.querySelector('img')
        userChoiceImage.src = `./images/icon-${userChoice}.svg`
        userChoiceImage.alt = `${userChoice} Icon`
    })
    

    const resultEL = document.querySelectorAll('.result')
    resultEL.forEach(el => {
        el.innerText = result
    })
    
    
   
   
    
}



// play again 

const playAgainBtn = document.querySelectorAll('.play-again')
playAgainBtn.forEach(button => {
    button.addEventListener('click', () => {
        const choiceEL = document.querySelectorAll('.game-step2 .gradient-border')
        choiceEL.forEach(el => {
            el.classList.remove(userChoice)
            el.classList.remove(computerChoice)
        })
        firstStepEL.classList.toggle('hide-step')
        secondStepEL.classList.toggle('show')
    })
})
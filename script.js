let computerChoices = ['rock', 'paper', 'scissors'],
  playerChoices = {
    65: 'rock',
    83: 'paper',
    68: 'scissors',
  }

let playerScore = 0,
  computerScore = 0;

const computerPlay = () => {
  return computerChoices[Math.floor(Math.random() * computerChoices.length)]
}

const playRound = (player, computer) => {
  switch(player) {
    case 'rock':
      if (computer === 'paper') {
        display('Computer plays paper. Computer wins!')
        computerChoices.push('scissors')
        computerScore++;
      } else if (computer === 'scissors') {
        display('Computer plays scissors. Player wins!')
        computerChoices.push('paper')
        playerScore++;
      } else {
        display('We have a tie!')
      }
      break;
    case 'paper':
      if (computer === 'scissors') {
        display('Computer plays scissors. Computer wins!')
        computerChoices.push('rock')
        computerScore++;
      } else if (computer === 'rock') {
        display('Computer plays rock. Player wins!')
        computerChoices.push('scissors')
        playerScore++;
      } else {
        display('We have a tie!')
      }
      break;
    case 'scissors':
      if (computer === 'rock') {
        display('Computer plays rock. Computer wins!')
        computerChoices.push('paper')
        computerScore++;
      } else if (computer === 'scissors') {
        display('Computer plays paper. Player wins!')
        computerChoices.push('rock')
        playerScore++;
      } else {
        display('We have a tie!')
      }
      break;
  }
}

const display = (str) => {
  let displayWindow = document.querySelector('#window');
  displayWindow.textContent = str;
  setTimeout(() => {
    displayWindow.textContent = `Player: ${playerScore}, Computer: ${computerScore}`
  }, 1000)
}
let buttons = Array.from(document.querySelectorAll('.buttons>button'))
buttons.forEach(btn => btn.addEventListener('click', () => {
  playRound(playerChoices[btn.getAttribute('data-key')], computerPlay())
}))
window.addEventListener('keydown', (e) => playRound(playerChoices[e.keyCode], computerPlay()))
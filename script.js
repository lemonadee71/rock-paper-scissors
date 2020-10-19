let choices = ['rock', 'paper', 'scissors'];
let score = 0,
  ties = 0;

const computerPlay = () => {
  return choices[Math.floor(Math.random() * choices.length)]
}

const playRound = (player, computer) => {
  switch(player) {
    case 'rock':
      if (computer === 'paper') {
        alert('Computer plays paper. Computer wins!')
        choices.push('scissors')
      } else if (computer === 'scissors') {
        alert('Computer plays scissors. Player wins!')
        choices.push('paper')
        score++;
      } else {
        alert('We have a tie!')
        ties++;
      }
      break;
    case 'paper':
      if (computer === 'scissors') {
        alert('Computer plays scissors. Computer wins!')
        choices.push('rock')
      } else if (computer === 'rock') {
        alert('Computer plays rock. Player wins!')
        choices.push('scissors')
        score++;
      } else {
        alert('We have a tie!')
        ties++;
      }
      break;
    case 'scissors':
      if (computer === 'rock') {
        alert('Computer plays rock. Computer wins!')
        choices.push('paper')
      } else if (computer === 'scissors') {
        alert('Computer plays paper. Player wins!')
        choices.push('rock')
        score++;
      } else {
        alert('We have a tie!')
        ties++;
      }
      break;
  }
}

const game = () => {
  let rounds;
  while (isNaN(rounds)) {
    rounds = parseInt(prompt('How many rounds do you want to play?'))
  }

  for(let i = 0; i < rounds; i++) {
    let playerSelection;
    while (!playerSelection) {
      playerSelection = prompt('Enter your choice: rock, paper or scissors').toLowerCase()
      if (!choices.includes(playerSelection)) {
        alert('Invalid input. Type rock, paper or scissors only.')
        playerSelection = null;
      }
    }

    playRound(playerSelection, computerPlay())
  }

  if (score > Math.floor((rounds - ties) / 2)) {
    alert(`Player: ${score}, Computer: ${rounds - score - ties}. Player wins. Restart page to play again.`)
  } else if (score < Math.floor((rounds - ties) / 2) ) {
    alert(`Player: ${score}, Computer: ${rounds - score - ties}. Computer wins. Restart page to play again.`)
  } else {
    alert(`Player: ${score}, Computer: ${rounds - score - ties}. It's a tie. Restart page to play again.`)
  }

  console.log(choices)
}

document.addEventListener('onload', game())
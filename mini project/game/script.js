document.addEventListener('DOMContentLoaded', function() {
    const choices = ['rock', 'paper', 'scissors'];
    let playerScore = 0;
    let computerScore = 0;
  
    const buttons = document.querySelectorAll('.choice');
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const result = getResult(playerChoice, computerChoice);
  
        updateScore(result);
        showResult(playerChoice, computerChoice, result);
      });
    });
  
    function getComputerChoice() {
      const randomIndex = Math.floor(Math.random() * choices.length);
      return choices[randomIndex];
    }
  
    function getResult(playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return 'It\'s a tie!';
      } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
      ) {
        playerScore++;
        return 'You win!';
      } else {
        computerScore++;
        return 'Computer wins!';
      }
    }
  
    function updateScore(result) {
      const scoreElement = document.getElementById('score');
      scoreElement.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    }
  
    function showResult(playerChoice, computerChoice, result) {
      const resultElement = document.getElementById('result');
      resultElement.innerHTML = `
        <p>You chose <strong>${playerChoice}</strong>.</p>
        <p>The computer chose <strong>${computerChoice}</strong>.</p>
        <p>${result}</p>
      `;
      resultElement.classList.remove('win', 'lose', 'tie');

      if (result === 'You win!') {
        resultElement.classList.add('win');
      } else if (result === 'Computer wins!') {
        resultElement.classList.add('lose');
      } else {
        resultElement.classList.add('tie');
      }
    }
});

      
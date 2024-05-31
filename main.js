document.addEventListener('DOMContentLoaded', () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const guessInput = document.querySelector('.inputs');
        const guessButton = document.querySelector('.guessBtn');
        const resultMsg = document.querySelector('.resultMessage');
        const attemptsRemain = document.querySelector('.attemptsLeft')

        let attempts = 3;
    
        guessButton .addEventListener('click', (event) => {
            event.preventDefault();
            const userGuess = parseInt(guessInput.value);
            
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                resultMsg.innerHTML = 'Please enter a number between 1 and 100.';
                resultMsg.style.color = 'red';
                return
            }
    
            attempts--;
            if (userGuess === randomNumber) {
                resultMsg.innerHTML = 'Congratulations! You guessed the correct number!';
                resultMsg.style.color = 'chartreuse';
                guessButton .disabled = true;
                guessInput.disabled = true;
            } 
            
            else if (userGuess < randomNumber) {
                resultMsg.innerHTML = 'Too low! Try again.';
                resultMsg.style.color = 'yellow';
            } 
            
            else {
                resultMsg.innerHTML = 'Too high! Try again.';
                resultMsg.style.color = 'yellow';
            }
    
            attemptsRemain .innerHTML = `No. of attempts left: ${attempts}`;

    
            if (attempts === 0 && userGuess !== randomNumber) {
                resultMsg.innerHTML = `GAME OVER! The correct number was ${randomNumber}.`;
                resultMsg.style.color = 'red';
                guessButton .disabled = true;
                guessInput.disabled = true;
            }

            updateAttemptsMessage();
        });

        function updateAttemptsMessage() {
            attemptsRemain .innerHTML = attempts;

            if (attempts < 3) {
                attemptsRemain .style.color = 'gold'
            }
        }
});
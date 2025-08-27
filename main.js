document.addEventListener('DOMContentLoaded', () => {
        const randomNumber = Math.floor(Math.random() * 100) + 1;
        const guessInput = document.querySelector('.inputs');
        const guessButton = document.querySelector('.guessBtn');
        const resultMsg = document.querySelector('.resultMessage');
        const attemptsRemain = document.querySelector('.attemptsLeft');
        const resetBtn = document.querySelector('.resetBtn');

        let attempts = 3;
    
        guessButton .addEventListener('click', (event) => {
            event.preventDefault();
            const userGuess = parseInt(guessInput.value);
            
            if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
                resultMsg.innerHTML = 'Please enter a number between 1 to 100.';
                resultMsg.style.display = 'block';
                resultMsg.style.color = 'red';
                guessButton.disabled = false;
                guessInput.disabled = false;
                
                 setTimeout(() => {
                    resultMsg.style.display = 'none';
                 }, 3000)
                
                return;
            }
    
            attempts--;
            if (userGuess === randomNumber) {
                resultMsg.style.display = 'block';
                resultMsg.innerHTML = 'Congratulations! You guessed the correct number!';
                resultMsg.style.color = 'chartreuse';
                guessButton.disabled = true;
                guessInput.disabled = true;
            } 
            
            else if (userGuess < randomNumber) {
                resultMsg.style.display = 'block';
                resultMsg.innerHTML = 'Too low! Try again.';
                resultMsg.style.color = 'yellow';
            } 
            
            else {
                resultMsg.style.display = 'block';
                resultMsg.innerHTML = 'Too high! Try again.';
                resultMsg.style.color = 'yellow';
            }
    
            attemptsRemain.innerHTML = `No. of attempts left: ${attempts}`;

    
            if (attempts === 0 && userGuess !== randomNumber) {
                resultMsg.style.display = 'block';
                resultMsg.innerHTML = `GAME OVER! The correct number was ${randomNumber}.`;
                resultMsg.style.color = 'red';
                guessButton.disabled = true;
                guessInput.disabled = true;
            }

            updateAttemptsMessage();
        });

        function updateAttemptsMessage() {
            attemptsRemain.innerHTML = attempts;

            if (attempts < 3) {
                attemptsRemain.style.color = 'gold'
            }
    }
    
    resetBtn.addEventListener('click', () => {
        location.reload();
    })
});


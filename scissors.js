const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    //starts the game
    const startGame = () => {
        const playButton = document.querySelector('.introButton');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeout');
            match.classList.add('fadein')
        });;
    };


    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.playerhand');
        const computerHand = document.querySelector('.computerhand');

        //computer options    
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function () {
                const computerNumber = Math.floor(Math.random() * computerOptions.length);
                const computerChoice = computerOptions[computerNumber];
                compareHands(this.textContent, computerChoice)

                playerHand.textContent = this.textContent;
                computerHand.textContent = computerChoice;

            });
        });

    }

    const updateScore = () => {
        let pScore = document.querySelector('.pPoints');
        let cScore = document.querySelector('.cpoints');
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
    }


    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');
        //checks for a draw
        if (playerChoice === computerChoice) {
            winner.textContent = 'It is a tie.';
            return;
        }

        //checks for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins.';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins.';
                computerScore++;
                updateScore();
                return;
            }
        }

        //checks for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Player Wins.';
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Computer Wins.';
                playerScore++;
                updateScore();
                return;
            }
        }

        //checks for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins.';
                computerScore++;
                updateScore();
                return;
            } else {
                winner.textContent = 'Player Wins.';
                playerScore++;
                updateScore();
                return;
            }
        }
    }

    startGame()
    playMatch()

};

game()
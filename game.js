const game = () => {
    let playerScore = 0
    let computerScore = 0
    let moves = 0
    const playGame = () => {
        const rockBtn = document.querySelector('.rock')
        const paperBtn = document.querySelector('.paper')
        const scissorsBtn = document.querySelector('.scissors')
        const playerOptions = [rockBtn,paperBtn,scissorsBtn]
        const computerOptions = ['rock','paper','scissors']

        playerOptions.forEach(option => {
            option.addEventListener('click',function(){
                const movesLeft = document.querySelector('.movesLeft');
                moves++;
                movesLeft.innerText = `Moves Left: ${5-moves}`;
                const choiceNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[choiceNumber];
                winner(this.innerText,computerChoice)
                if(moves == 5){
                    gameOver(playerOptions,movesLeft);
                }
            })
        })
    }
    const winner = (player,computer) => {
        const result = document.querySelector('.result');
        const playerScoreBoard = document.querySelector('.p-count')
        const computerScoreBoard = document.querySelector('.c-count')
        player = player.toLowerCase();
        computer = computer.toLowerCase();
        if(player === computer){
            result.textContent = 'You picked the same. Tied Match.'
        }
        else if(player == 'rock'){
            if(computer == 'paper'){
                result.textContent = 'Rock gets covered by paper. Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Rock smashes scissors. Player Wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'paper'){
            if(computer == 'scissors'){
                result.textContent = 'Paper gets cut by scissors. Computer Wins!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Paper covers rock. Player Wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
        else if(player == 'scissors'){
            if(computer == 'rock'){
                result.textContent = 'Scissors gets smashed by rock. Computer Win!';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }else{
                result.textContent = 'Scissors cuts paper. Player Wins!';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }
    const gameOver = (playerOptions,movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload')
        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
        chooseMove.innerText = 'Game Over!'
        movesLeft.style.display = 'none';
        if(playerScore > computerScore){
            result.style.fontSize = '16px';
            result.innerText = 'You won the game!'
            result.style.color = 'green';
        }
        else if(playerScore < computerScore){
            result.style.fontSize = '16px';
            result.innerText = 'You lost the game!'
            result.style.color = 'red'
        }else{
            result.style.fontSize = '16px';
            result.innerText = 'Tied Game!';
            result.style.color = 'grey';
        }
        reloadBtn.innerText = 'Rematch?';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
    playGame();
}
game();

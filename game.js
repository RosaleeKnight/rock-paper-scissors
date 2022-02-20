const game = () => {
    let playerScore = 0
    let computerScore = 0
    let moves = 0

    const playGame = () => {
        const rockBtn = document.querySelector('.rock')
        const paperBtn = document.querySelector('.paper')
        const scissorsBtn = document.querySelector('.scissor')
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
}
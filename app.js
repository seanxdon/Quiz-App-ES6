const startButton = document.getElementById('start-btn');
const questionContainer = document.getElementById('question-container');
startButton.addEventListener('click', startGame);

// START GAME 
function startGame() {
    startButton.classList.add('hide');
    questionContainer.classList.remove('hide');
    console.log('started');
}
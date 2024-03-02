//enter the game
function play(){
    //step-1: hide the home screen. add hidden class
    const homeScreen = document.getElementById('home-screen');
    // console.log(homeScreen.classList)
    homeScreen.classList.add('hidden');

    //step-2: show the playground
    const playGroundScreen = document.getElementById('play-ground');
    playGroundScreen.classList.remove('hidden');

    const scoreScreen = document.getElementById('score');
    scoreScreen.classList.add('hidden');


    //----------------------------
    //reset score and life
    setTextElementValueById('current-life', 10);
    setTextElementValueById('current-score', 0);

    continueGame()
}

//play the game
function continueGame(){
    //step-1: generate random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your Random Alphabet is ', alphabet);
    //set randomly generated alphabet to screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set backgroundcolor
    setBackgroundColorById(alphabet);
}

//keyboard event & function
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log('Player Pressed', playerPressed);

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check
    if(playerPressed === expectedAlphabet){
        //update score
        //1. get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);
        console.log(currentScore);
        //2. increase the score by 1
        const newScore = currentScore + 1;

        //3. update & show score
        currentScoreElement.innerText = newScore;

        //new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('Missed! You lost a life');
        //Update life
        //1. get the current life
        const currentLifeElement = document.getElementById('current-life');
        const currentLifeText = currentLifeElement.innerText;
        const currentLife = parseInt(currentLifeText);
        console.log(currentLife);

        //2. Decrease the life by 1
        const newLife =  currentLife - 1;

        //3. Update & show the life
        currentLifeElement.innerText = newLife;

        if(newLife === 0){
            gameOver();
        }
    }
}
//capture key press
document.addEventListener('keyup', handleKeyboardButtonPress);


function gameOver(){
    //step-1: hide the playground screen. add hidden class
    const homeScreen = document.getElementById('play-ground');
    // console.log(homeScreen.classList)
    homeScreen.classList.add('hidden');

    //step-2: show the playground
    const playGroundScreen = document.getElementById('score');
    playGroundScreen.classList.remove('hidden');

    //update final score
    //1. get the final score
    const gameScore = setTextElementValueById('current-score');
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
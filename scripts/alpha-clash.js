//enter the game
function play(){
    //step-1: hide the home screen. add hidden class
    const homeScreen = document.getElementById('home-screen');
    // console.log(homeScreen.classList)
    homeScreen.classList.add('hidden');

    //step-2: show the playground
    const playGroundScreen = document.getElementById('play-ground');
    playGroundScreen.classList.remove('hidden');

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
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('Missed! You lost a life');
    }
}
//capture key press
document.addEventListener('keyup', handleKeyboardButtonPress);
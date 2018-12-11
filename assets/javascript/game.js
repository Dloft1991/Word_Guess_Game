const computerChoice = ['ironman', 'captainamerica', 'thor', 'thanos', 'redskull', 'antman', 'spiderman', 'blackpanther', 'captainmarvel', 'blackwidow', 'loki', 'hulk'];
const game = document.querySelector('main');

let maxGuesses = 10,
    userGuess = [],
    rightGuess = [],
    guessesLeft = 0;
let currentWord;


document.onkeyup = function(event) {
    const userGuess = event.key;

    const computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    guessedLetters = [];
    rightGuess = [];

    for (var i =0; i < computerChoice[currentWord].length; i++) {
        rightGuess.push('_');
    }

    
    game.innerHTML = `
        <p>You Choose: ${userGuess}<p>
        <P>Computer Chose: ${computerGuess}<p>
        <p>wins: ${wins}<p>
        <p>losses: ${losses}<p>
        <p>Guesses Left: ${maxGuesses}<p>
        <p>Your Picks: ${wrongPick}<p>
         `

}
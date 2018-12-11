const words = ['ironman', 'captainamerica', 'thor', 'thanos', 'redskull', 'antman', 'spiderman', 'blackpanther', 'captainmarvel', 'blackwidow', 'loki', 'hulk'];
const game = document.querySelector('main');

let hiddenWord = [],
    guessLeft = 10,
    guessedLetters = [];


document.onkeyup = function(event) {
    const userGuess = event.key;

    const answer = words[Math.floor(Math.random() * words.length)];

    
    document.getElementById("guessLeft").innerText = "10";
    document.getElementById("guessedLetters").innerText = " ";

    for (var i = 0; i < words.length; i++) {
        document.getElementById("hiddenWord").innerText = "_";
    }
    if (userGuess === words[i]) {
        guessLeft--;
        hiddenWord.push("_");
    } else {
        guessLeft--;
    }




    
    // game.innerHTML = `
    //     <p>You Choose: ${userGuess}<p>
    //     <P>Computer Chose: ${computerGuess}<p>
    //     <p>Word: ${rightGuess}<p>
    //     <p>Guesses Left: ${maxGuesses}<p>
    //      `

}
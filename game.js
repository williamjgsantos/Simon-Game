let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4); //0-3
    let randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
}
let buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence() {

    let randomNumber = Math.floor(Math.random() * 4); //0-3
    let randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
}

function playSound (buttonId) {
    let audio = new Audio("sounds/"+ buttonId + ".mp3");
    audio.play();
}
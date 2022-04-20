let buttonColours = ["red", "blue", "green", "yellow"];

let userClickedPattern = new Array();

$(".btn").click(function(event) {
    let userChosenColour = this.id;
    
    addColour(userChosenColour);

});

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

function addColour(btnGotClicked) {
    // Add the id of button to the userClickedPattern array
    let userChosenColour  = btnGotClicked;
    userClickedPattern.push(userChosenColour);
}
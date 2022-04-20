let buttonColours = ["red", "blue", "green", "yellow"];

let gamePattern = new Array();
let userClickedPattern = new Array();

let level = 0;
let gameStarted = false;

$(document).keypress(function() {
    if(!gameStarted) {
        gameStarted = true;
        changeLevel(level);
        nextSequence();
    }
})

$(".btn").click(function(event) {
    let userChosenColour = this.id;
    
    addColour(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour)
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    userClickedPattern = [];
    let randomNumber = Math.floor(Math.random() * 4); //0-3
    let randomChosenColour  = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

    level++;
    changeLevel(level);
}

function playSound (name) {
    let audio = new Audio("sounds/"+ name + ".mp3");
    audio.play();
}

function addColour(btnGotClicked) {
    // Add the id of button to the userClickedPattern array
    let userChosenColour  = btnGotClicked;
    userClickedPattern.push(userChosenColour);
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100)
}

function changeLevel(number) {
    $("#level-title").text("Level " + number);
}

function checkAnswer(currentLevel) {

    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userClickedPattern.length === gamePattern.length){
            setTimeout(function () {
              nextSequence();
            }, 1000);
          }
        console.log("Succes");
    } else {
        console.log("Wrong");
        gameOver();
    }
    
    startOver();
}

function gameOver() {
    playSound("wrong");
    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press A Key to Restart");

    setTimeout(function() {
        $("body").removeClass("game-over ");
    }, 200)
}

function startOver() {
    level = 0;
    gamePattern = [];
    gameStarted = false;
}
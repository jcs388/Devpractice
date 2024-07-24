buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;

$(".btn").on("click", function() {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);
    var audio = new Audio("sounds/" + userChosenColor + ".mp3");
    audio.play();
    animatePress(userChosenColor);
    console.log(userClickedPattern);
    checkAnswer(userClickedPattern.length-1);
})

$(document).keypress(function() {
    gamePattern = [];
    $("h1").text("Level 0");
    nextSequence();
})

function nextSequence() {
    setTimeout(function() {
        userClickedPattern = [];
        var randomNumber = Math.floor(Math.random() * 4)
        randomChosenColor = buttonColors[randomNumber];
        gamePattern.push(randomChosenColor);

        $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
        var audio = new Audio("sounds/" + randomChosenColor + ".mp3");
        audio.play();

        level++;
        $("h1").text("Level " + level)

        console.log(gamePattern);
    }, 1000);
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function() {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("Success");
        if (userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    } else {
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)
        $("h1").text("Game Over, Press Any Key to Restart")
        level = 0;
        console.log("wrong");
    }
}

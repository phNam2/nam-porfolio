var playing = false;
var liveLeft;
var timeRemaining;
var actionTime;

// Starting function
$(function() {
    // Click the "Start" button
    $("#StartReset").click(function() {
        // Are we playing?
        // Yes
        if (playing == true) {
            // reload page
            location.reload();
        } else {
            // No
            playing = true;
            
//            // Make the scoreboard appear
//            score = 0;
//            $(".score").html(score);
            
            // Change the titile of the start button
            $("#StartReset").html("Reset");
            
            // show the "Lives box"
//            $("#lives").show();
            liveLeft = 3;
            addHearts();
            
            // Add the time inside the game
            timeRemaining = 200;
            $("#seconds").html(timeRemaining);
            startCounting();
            
            
        }
    });
});

// Give the heart image on the health bar
function addHearts() {
    $("#live").empty();
    for(i=0; i<liveLeft ; i++) {
        $("#live").append('<img src="image/game/heart.gif" class="life">');
    }
}

// Start the counting clock for the game
function startCounting(){
    actionTime = setInterval(function(){
        timeRemaining -= 1;
        $("#timeLeft").html(timeRemaining);
        if (timeRemaining <= 0) {
            
            $(".score").html(score);
            gameOver();
        }
    }, 1000);
}

// Stop the counting clock when the game is end 
function stopCounting() {
    clearInterval(actionTime);
}


// When the game is over
function gameOver() {
    
}
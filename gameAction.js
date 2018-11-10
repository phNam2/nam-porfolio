var playing = false;
var liveLeft;
var timeRemaining;

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
            
            // Make the scoreboard appear
            score = 0;
            $("#score").html(score);
            
            // Change the titile of the start button
            $("#startReset").html("Reset");
            
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
        $("#live").append('<img src="image/heart.gif" class="life">');
    }
}
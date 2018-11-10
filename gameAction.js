var playing = false;
var ships;
var score;
var liveLeft;
var timeRemaining;

document.getElementById("StartReset").onclick = function() {
    
    if (playing == true) {
        // reload page
        location.reload();
    }
    else {
        playing = true;
        
        // The number of enemy ships
        ships = 20;
        $("#number").html(ships);
        
        // Make the scoreboard appear
        score = 0;
        $("#score").html(score);
        
        $('#StartReset').html("Reset"); 
        
        // show the "Lives box"
//            $("#lives").show();
        liveLeft = 3;
        addHearts();
        
        // Add the time inside the game
        timeRemaining = 190;
        $("#seconds").html(timeRemaining);
        startCounting();
        
        //Play music
        $("#song")[0].play();
        
        // Start the content
        
    }
}

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
        $("#seconds").html(timeRemaining);
        if (timeRemaining <= 0) {
            
            $("#kaboom")[0].play();
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
    
    document.getElementById("song").pause();
    stopCounting();
} 





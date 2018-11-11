var playing = false;
var ships;
var score;
var liveLeft;
var timeRemaining;

// Object wall
function wall (id, postion, headTo) {
    
    this.wallID = id;
    this.actionWall = null;
    this.wallPos = postion;
    this.headTo = headTo;
}
var wall1;
var wall2;

// Object tank
function tank (pos) {
    
    this.tankPos = pos;
}
var tankGo;

// Object bullet
var available = true;
function bullet (id, type, speed, y) {
    this.id = id;
    this.type = type;
    this.speed = speed;
    this.yAxis = y;
    this.actionBullet = null;
}
var bulletGo; 

// Object meterorite
function asteroid(id) {
    this.asID = id;
    this.meteAction = null;
}
var asteroid1;
var asteroid2;
var asteroid3;
var asteroid4;
var asteroid5;


// Start the game
document.getElementById("StartReset").onclick = function() {
    
    if (playing == true) {
        // reload page
        location.reload();
    }
    else {
        playing = true;
        
        // Show the game content
        $("#animation").show();
        
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
        // The wall content
        wall1 = new wall("#wall1", 90, "right");
        movingWall1(wall1);
        
        wall2 = new wall("#wall2", 780, "left");
        movingWall1(wall2);
        
        // The tank content
        tankGo = new tank(90);
        
        // The bullet original content
        bulletGo = new bullet("#bullet1", 1, 3, 600);
        
        // The asteroids original content
        asteroid1 = new asteroid("#as1");
        movingAsteroids(asteroid1);
        
        var timeout2 = setTimeout(function(){
            asteroid2 = new asteroid("#as2");
            movingAsteroids(asteroid2);
        }, 2000);
        
        var timeout3 = setTimeout(function(){
            asteroid3 = new asteroid("#as3");
            movingAsteroids(asteroid3);
        }, 5000);
        
        var timeout4 = setTimeout(function(){
            asteroid4 = new asteroid("#as4");
            movingAsteroids(asteroid4);
        }, 70000);
        
        var timeout5 = setTimeout(function(){
            asteroid5 = new asteroid("#as5");
            movingAsteroids(asteroid5);
        }, 140000);
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
    
    clearInterval(wall1.actionWall);
    clearInterval(wall2.actionWall);
    clearInterval(bulletGo.actionBullet);
    document.getElementById("song").pause();
    stopCounting();
    playing = false;
} 

function movingWall1(wall){
    wall.actionWall = setInterval(function(){
        if (wall.headTo == "right") {
            if ( (wall.wallPos + 1) > 780) {
                wall.headTo = "left";
            } else {
                wall.wallPos += 1.5;
                $(wall.wallID).css('left', wall.wallPos);
            }
        }
        if (wall.headTo == "left") {
            if ( (wall.wallPos - 1) < 90) {
                wall.headTo = "right";
            } else {
                wall.wallPos -= 1.5;
                $(wall.wallID).css('left', wall.wallPos);
            }
        }
    }, 10);
}


window.addEventListener('keydown', function (e) {
    // go to the left
    if (e.keyCode == 37 &&
        playing == true) {
        if ( tankGo.tankPos-6 > 89) {
            tankGo.tankPos -= 6;
            $("#tank").css('left', tankGo.tankPos);
        }
    }
    // go to the right
    if (e.keyCode == 39 &&
        playing == true) {
        if ( tankGo.tankPos+6 < 954) {
            tankGo.tankPos += 6;
            $("#tank").css('left', tankGo.tankPos);
        }
    }
    
    // Fire gun by pressing space
    if (e.keyCode == 32 &&
        playing == true) {
        if (available==true) {
            available=false;
            bulletGo.yAxis = 600;
            fire();    
        }
    }
});

// The bullet travel through the screen
function fire() {
    $(bulletGo.id).show();
    $(bulletGo.id).css({'left':tankGo.tankPos+10, 'top':bulletGo.yAxis});
    
     bulletGo.actionBullet = setInterval(function(){
        bulletGo.yAxis -= bulletGo.speed;
        $(bulletGo.id).css('top', bulletGo.yAxis);
        //Is the fruit too low?
        if (bulletGo.yAxis < -30) {
            available=true;
            clearInterval(bulletGo.actionBullet);
        }
    }, 10);
}

// The action for the asteroids
function movingAsteroids(meteorite) {
    $(meteorite.asID).show();
    var asX = Math.floor((Math.random() * 860) + 70);
    var asY = -70;
    $(meteorite.asID).css({'left':asX, 'top':asY});
    
     meteorite.meteAction = setInterval(function(){
        asY += Math.floor((Math.random() * 4) + 1);;
        $(meteorite.asID).css('top', asY);
        //Is the fruit too low?
        if (asY >635) {
            $(meteorite.asID).hide();
        }
        if (asY > 700) {
            clearInterval(meteorite.meteAction);
            movingAsteroids(meteorite);
        }
    }, 10);
}

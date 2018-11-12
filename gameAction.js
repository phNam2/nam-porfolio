var reload = false;
var playing = false;
var ships;
var score;
var liveLeft;
var timeRemaining;

var ending;

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
    
    this.tankID = "#tank";
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
var asteroids=[];
var timeout;
var asteroid6;

// Gift
function gift(bulletType) {
    this.giftID = "#levelUp";
    this.bulletNo = bulletType;
}
var Up;
var giftOut;

// Enemy ship 
function enemyShip(enemyID, number) {
    this.EnemyID = enemyID;
    this.number = number;
    this.EnemyAction = null;
    this.position = 0;
}
var currentSide = "left";
var enemyLeft = [];
var enemyRight = [];

// Start the game
document.getElementById("StartReset").onclick = function() {
    
    if (reload == true) {
        // reload page
        location.reload();
    }
    else {
        reload = true;
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
        var asteroid1 = new asteroid("#as1");
        asteroids.push(asteroid1);
        movingAsteroids(asteroids[0]);
        
        // The second asteroid
        timeout = setTimeout(function(){
            if (playing == true) { // Is the game is still on
                asteroid1 = new asteroid("#as2");
                asteroids.push(asteroid1);
                movingAsteroids(asteroids[1]);
            }
        }, 2000);
        
        // The third asteroid
        timeout = setTimeout(function(){
            if (playing == true) {
                asteroid1 = new asteroid("#as3");
                asteroids.push(asteroid1);
                movingAsteroids(asteroids[2]);
            }
        }, 5000);
        
        // The first gift out
        giftOut = setTimeout(function(){
            if (playing == true) {
                Up = new gift(2);
                sendGift(Up);
            }
        }, 60000);
        // The fourth asteroid
        timeout = setTimeout(function(){
            if (playing == true) {
                $(Up.giftID).hide(); // Hide the gift
            
                asteroid1 = new asteroid("#as4");
                asteroids.push(asteroid1);
                movingAsteroids(asteroids[3]);
            }
        }, 70000);
        
        // The second gift out
        giftOut = setTimeout(function(){
            if (playing == true) {
                Up = new gift(3);
                sendGift(Up);
            }
        }, 130000);
        // The fifth asteroid
        timeout = setTimeout(function(){
            if (playing == true) {
                $(Up.giftID).hide(); // Hide the gift
            
                asteroid1 = new asteroid("#as5");
                asteroids.push(asteroid1);
                movingAsteroids(asteroids[4]);
            }
        }, 140000);
        
        // The enemy ship 
        for (i=1; i<=40; i++) {
            var enemies = new enemyShip("#left"+i, i);
            enemyLeft.push(enemies);
            enemies = new enemyShip("#right"+i, i);
            enemyRight.push(enemies);
        }
        enemyMovement();
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
            
            $(".score").html(score);
            ending = "lose";
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
    playing = false;
    stopCounting();
    clearInterval(wall1.actionWall);
    clearInterval(wall2.actionWall);
    $('#StartReset').html("Start Over"); 
    
    // Stop the bullet motion
    clearInterval(bulletGo.actionBullet);
    $(bulletGo.id).hide();
    
    // Clear all of the timeout
    clearTimeout(timeout);
    clearTimeout(giftOut);
    
    // Stop all the other asteroids
    for (i=0; i<5; i++) {
        if (asteroids[i] != null) {
            clearInterval(asteroids[i].meteAction);
            $(asteroids[i].asID).hide();
        }
    }
    
    if (ending=="lose") {
        asteroid6 = new asteroid("#as6");
        annihilate(asteroid6);
    } else if (ending=="win"){
//        $("#animation").hide();
        
        setTimeout(function(){ $("#giveUp0").show(); }, 2000);
        setTimeout(function(){ 
            $("#giveUp0").hide(); 
            $("#giveUp").show(); 
        }, 7000);
        setTimeout(function(){ $("#continue")[0].play() }, 15000);
        setTimeout(function(){ $("#win").show() }, 15000);
    }
} 


// End game and the last asteroid destroy everything
function annihilate(meteorite){
    $(meteorite.asID).show();
    var asX = 200;
    var asY = -350;
    $(meteorite.asID).css({'left':asX, 'top':asY});
    
     meteorite.meteAction = setInterval(function(){
        asY += 3;
        $(meteorite.asID).css('top', asY);
        if (asY >250) {
            clearInterval(meteorite.meteAction);
            $(meteorite.asID).hide();
            $("#kaboom")[0].play();
            $("#animation").hide();
            $("#lose").show();
        }
    }, 10);
}


// The 2 walls automatic movement
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

// The keyboard action listener
window.addEventListener('keydown', function (e) {
    // go to the left
    if (e.keyCode == 37 &&
        playing == true) {
        if ( tankGo.tankPos-6 > 89) {
            tankGo.tankPos -= 6;
            $(tankGo.tankID).css('left', tankGo.tankPos);
        }
    }
    // go to the right
    if (e.keyCode == 39 &&
        playing == true) {
        if ( tankGo.tankPos+6 < 954) {
            tankGo.tankPos += 6;
            $(tankGo.tankID).css('left', tankGo.tankPos);
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
        //Is the bullet out of bound?
        if (bulletGo.yAxis < -30) {
            available=true;
            clearInterval(bulletGo.actionBullet);
        }
    }, 10);
}

// The action for the asteroids
function movingAsteroids(meteorite) {
    $(meteorite.asID).show();
    var asX = Math.floor((Math.random() * 840) + 70);
    var asY = -100;
    $(meteorite.asID).css({'left':asX, 'top':asY});
    
     meteorite.meteAction = setInterval(function(){
        asY += Math.floor((Math.random() * 3) + 1);
        $(meteorite.asID).css('top', asY);
        //Is the asteroid out of bound?
        if (asY >635) {
            clearInterval(meteorite.meteAction);
            $(meteorite.asID).hide();
            movingAsteroids(meteorite);
        }
    }, 10);
}

// The postioning for the gift
function sendGift(gift) {
    $(gift.giftID).show();
    var asX = Math.floor((Math.random() * 930) + 90);
    var asY = 640;
    $(gift.giftID).css({'left':asX, 'top':asY});
}

function enemyMovement(){
    
    var firstPos = 80;
    enemyLeft[0].position = firstPos;
    $(enemyLeft[0].EnemyID).show();
    $(enemyLeft[0].EnemyID).css({'left':firstPos, 'top':10});
    for (i = 1; i<10; i++) {
        firstPos += 65;
        enemyLeft[i].position = firstPos;
        $(enemyLeft[i].EnemyID).show();
        $(enemyLeft[i].EnemyID).css({'left':firstPos, 'top':10});
    }
    
    firstPos = 80;
    $(enemyLeft[10].EnemyID).show();
    $(enemyLeft[10].EnemyID).css({'left':firstPos, 'top':60});
    for (i = 11; i<20; i++) {
        firstPos += 65;
        enemyLeft[i].position = firstPos;
        $(enemyLeft[i].EnemyID).show();
        $(enemyLeft[i].EnemyID).css({'left':firstPos, 'top':60});
    }
      
    firstPos = 80;
    $(enemyLeft[20].EnemyID).show();
    $(enemyLeft[20].EnemyID).css({'left':firstPos, 'top':110});
    for (i = 21; i<30; i++) {
        firstPos += 65;
        enemyLeft[i].position = firstPos;
        $(enemyLeft[i].EnemyID).show();
        $(enemyLeft[i].EnemyID).css({'left':firstPos, 'top':110});
    }
    
    firstPos = 80;
    $(enemyLeft[30].EnemyID).show();
    $(enemyLeft[30].EnemyID).css({'left':firstPos, 'top':160});
    for (i = 31; i<40; i++) {
        firstPos += 65;
        enemyLeft[i].position = firstPos;
        $(enemyLeft[i].EnemyID).show();
        $(enemyLeft[i].EnemyID).css({'left':firstPos, 'top':160});
    }
}


         
         
         
         
         
         
         
         
         
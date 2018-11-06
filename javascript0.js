var action1;
var action2;
var action3;
var action4;

document.getElementById("gc").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine1");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 6000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 8000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 10000);
    action4 =  setTimeout(function(){
        hide("offine1");
        hide("apology");
    }, 12000);
    
}

document.getElementById("ie").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine2");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 6000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 8000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 10000);
    action4 =  setTimeout(function(){
        hide("offine2");
        hide("apology");
    }, 12000);
}

document.getElementById("mf").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine3");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 6000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 8000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 10000);
    action4 =  setTimeout(function(){
        hide("offine3");
        hide("apology");
    }, 12000);
}

document.getElementById("me").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine4");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 6000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 8000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 10000);
    action4 =  setTimeout(function(){
        hide("offine4");
        hide("apology");
    }, 12000);
}

document.getElementById("op").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine5");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 6000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 8000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 10000);
    action4 =  setTimeout(function(){
        hide("offine5");
        hide("apology");
    }, 12000);
}

document.getElementById("vi").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine6");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 6000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 8000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 10000);
    action4 =  setTimeout(function(){
        hide("offine6");
        hide("apology");
    }, 12000);
}

document.getElementById("other").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine7");
    
    action4 =  setTimeout(function(){
        hide("offine7");
    }, 6000);
}

// Function used to hide the properties
function hide(id) {
    document.getElementById(id).style.display = "none";
    window.document.title = "LOL";
}

// Function used to show the properties
function show(id) {
    document.getElementById(id).style.display = "block";
    window.document.title = "LOL";
}
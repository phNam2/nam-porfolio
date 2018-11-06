var action1;
var action2;
var action3;
var action4;
var action5;

var x=0;

document.getElementById("gc").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine1");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 4000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 6000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 8000);
    action4 =  setTimeout(function(){
        hide("offine1");
        hide("apology");
        loadPage();
    }, 10000);
    
}

document.getElementById("ie").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine2");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 4000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 6000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 8000);
    action4 =  setTimeout(function(){
        hide("offine2");
        hide("apology");
        loadPage();
    }, 10000);
}

document.getElementById("mf").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine3");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 4000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 6000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 8000);
    action4 =  setTimeout(function(){
        hide("offine3");
        hide("apology");
        loadPage();
    }, 10000);
}

document.getElementById("me").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine4");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 4000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 6000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 8000);
    action4 =  setTimeout(function(){
        hide("offine4");
        hide("apology");
        loadPage();
    }, 10000);
}

document.getElementById("op").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine5");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 4000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 6000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 8000);
    action4 =  setTimeout(function(){
        hide("offine5");
        hide("apology");
        loadPage();
    }, 10000);
}

document.getElementById("vi").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine6");
    
    action1 =  setTimeout(function(){
        show("oop");
    }, 4000);
    action2 =  setTimeout(function(){
        show("wrong");
    }, 6000);
    action3 =  setTimeout(function(){
        show("sorry");
    }, 8000);
    action4 =  setTimeout(function(){
        hide("offine6");
        hide("apology");
        loadPage();
    }, 10000);
}

document.getElementById("other").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine7");
    
    x=1;
    action4 =  setTimeout(function(){
        hide("offine7");
        loadPage();
    }, 4000);
}

function loadPage() {
    show("offine7");
    hide("loadText");
    show("loader");
    
    if (x=0) {
        action5 =  setTimeout(function(){
            window.location.assign("index1.html");
        }, 13000);
    } else {
        action5 =  setTimeout(function(){
            window.location.assign("index1.html");
        }, 7000);
    }
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
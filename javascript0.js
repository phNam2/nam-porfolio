document.getElementById("gc").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine1");
}

document.getElementById("ie").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine2");
}

document.getElementById("mf").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine3");
}

document.getElementById("me").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine4");
}

document.getElementById("op").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine5");
}

document.getElementById("vi").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine6");
}

document.getElementById("other").onclick = function() {
    hide("container");
    window.document.title = "LOL";
    show("offine7");
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
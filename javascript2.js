document.getElementById("all1").onclick = function() {
    hide("all");
    show("back");
    show("project1");
    document.getElementById("works").style.background = "#9b0c0c";
}

document.getElementById("all2").onclick = function() {
    hide("all");
    show("back");
    show("project2");
    document.getElementById("works").style.background = "#9b0c0c";
}

document.getElementById("all3").onclick = function() {
    hide("all");
    show("back");
    show("project3");
    document.getElementById("works").style.background = "#9b0c0c";
}

document.getElementById("all4").onclick = function() {
    hide("all");
    show("back");
    show("project4");
    document.getElementById("works").style.background = "#9b0c0c";
}

document.getElementById("back").onclick = function() {
    show("all");
    hide("back");
    hide("project1");
    hide("project2");
    hide("project3");
    hide("project4");
    document.getElementById("works").style.background = "radial-gradient(#0a1187, #4c43cc)";
}

// Function used to hide the properties
function hide(id) {
    document.getElementById(id).style.display = "none";
}

// Function used to show the properties
function show(id) {
    document.getElementById(id).style.display = "block";
}

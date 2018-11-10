var playing = false;

document.getElementById("StartReset").onclick = function() {
    
    if (playing == true) {
        // reload page
        location.reload();
    }
    else {
        playing = true;
        
        
        $('#StartReset').html("Reset");   
    }
}
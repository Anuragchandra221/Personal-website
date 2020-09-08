function showNav(){
    document.getElementById("desktopButton").style.display = "none";
    document.getElementById("phonenav").style.display = "block";
    document.getElementById("phonenav").style.position = "fixed";
}

function hideNav(){
    document.getElementById("phonenav").style.display = "none";
    document.getElementById("desktopButton").style.display = "block";
}
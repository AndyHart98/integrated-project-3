/*This code was taken from https://www.w3schools.com/howto/howto_js_topnav_responsive.asp this code will remove or add the responsive class when the hamburger icon is clicked*/
function hamburgerMenu() {
    var x = document.getElementById("myTopnavWhite");
    if (x.className === "topnavWhite") {
        x.className += " responsive";
    } else {
        x.className = "topnavWhite";
    }
}
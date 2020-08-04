
    $("#fox-1").text("Macrotis");
    $('#fox-2').css("border-color","purple");
    $("pre").css("background", "yellow");
    $(".red").css("background", "purple");
    $(".yellow").text("Eastern");


let color = "purple";
let number = 10;
let word = "cool";


if (color === "purple") {
    $(".red").css("background", "purple");
}

$(".yellow").text("Second");

if (
    number > 100
) {
   console.log("whoah, that's a big number.") 
} else {
    console.log("just a regular number, please.")
}

/* let third = document.getElementById('third');
if (word === "cool") {
    Change the text to Power of DOM of the third
} else {
    otherwise change the fourth one
} */

if (
    word === "cool"
) {
    $("#third").text("Power of DOM");
} else {
    $("#fourth").text("Power of DOM");
}
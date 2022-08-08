
alert("Do you want to refresh?");
var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
document.querySelectorAll("img")[0].setAttribute("src" , "images/" + "dice" + randomNumber1 + ".svg");

var randomNumber2 = Math.floor(Math.random() * 6) + 1 ;
document.querySelectorAll("img")[1].setAttribute("src" , "images/" + "dice" + randomNumber2 + ".svg");

/**var randomNumber2 = Math.floor(Math.random()*6) + 1 ;
var randomImg2 = "dice" + randomNumber2  + ".svg";
var randomImgsource2 = "images/" + randomImg2;

document.getElementById("img2").setAttribute("src" + randomImgsource2);**/

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 wins🚩";
}
else {
    document.querySelector("h1").innerHTML = "Draw";
}
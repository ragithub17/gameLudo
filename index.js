var randNumber1 = Math.random();
randNumber1 = Math.floor(randNumber1 * 6) + 1;

var randomImage = "./images/dice" + randNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);

var randNumber2 = Math.random();
randNumber2 = Math.floor(randNumber2 * 6) + 1;

var randomImage2 = "./images/dice" + randNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImage2);

if (randNumber1 > randNumber2) {
  document.querySelector("h3").innerHTML = "🚩Player1 wins!";
} else if (randNumber2 > randNumber1) {
  document.querySelector("h3").innerHTML = "Player2 wins!🚩";
} else {
  document.querySelector("h3").innerHTML = "🚩Draw!🚩";
}

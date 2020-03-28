arr = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];
var player1 = Math.random() * 6;
var player2 = Math.random() * 6;
player1 = Math.floor(player1);
player2 = Math.floor(player2);
if (player1 > player2) {
  document.getElementById("heading").innerHTML = "Player 1 Win !";
  document.querySelector(".img1").setAttribute("src", arr[player1]);
  document.querySelector(".img2").setAttribute("src", arr[player2]);
} else if (player1 < player2) {
  document.getElementById("heading").innerHTML = "Player 2 Win !";
  document.querySelector(".img1").setAttribute("src", arr[player1]);
  document.querySelector(".img2").setAttribute("src", arr[player2]);
} else {
  document.getElementById("heading").innerHTML = "Draw !";
  document.querySelector(".img1").setAttribute("src", arr[player1]);
  document.querySelector(".img2").setAttribute("src", arr[player2]);
}

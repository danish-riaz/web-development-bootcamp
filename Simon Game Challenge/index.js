var level = 1;
var userclickedBtns = [];

var arr = ["green", "red", "yellow", "blue"];
var gameClickedBtns = [];

// Starting game by pressing key
$(document).bind("keypress", function(e) {
  startGame();
});

function randomHit() {
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4) + 1;

  //   adding and removing css
  $("." + arr[randomNumber - 1]).addClass("pressed");
  setTimeout(function() {
    $("." + arr[randomNumber - 1]).removeClass("pressed");
  }, 500);

  //   Adding to gameBtns
  gameClickedBtns.push($("." + arr[randomNumber - 1]).attr("id"));
}

$(".btn").click(function(e) {
  userclickedBtns.push($(this).attr("id"));
});

function startGame() {
  gameBtns = [];
  //   Changing Level
  console.log("level in startGame " + level);
  console.log("counter in startGame " + localCounter);
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4) + 1;

  //   adding and removing css
  $("." + arr[randomNumber - 1]).addClass("pressed");
  setTimeout(function() {
    $("." + arr[randomNumber - 1]).removeClass("pressed");
  }, 500);

  //   Adding to gameBtns
  gameBtns.push($("." + arr[randomNumber - 1]).attr("id"));

  //   Detecting Mouse Click
}

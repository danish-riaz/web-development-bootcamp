var eventCounter = 0;
var boxesName = ["green", "red", "yellow", "blue"];
var level = 1;

var gamePattern = [];
var userPattern = [];

// Starting Point
$(document).bind("keypress", function() {
  showNextMove();
});

$(".btn").click(function(e) {
  ++eventCounter;
  if (eventCounter == level) {
    userPattern.push($(this).attr("id"));
    if (JSON.stringify(gamePattern) == JSON.stringify(userPattern)) {
      ++level;
      showNextMove();
    } else {
      $("#level-title").text("You loose.Refresh to start again.");
    }
  } else {
    userPattern.push($(this).attr("id"));
  }
});

function showNextMove() {
  userPattern = [];
  eventCounter = 0;
  $("#level-title").text("Level " + level);
  var randomBoxSel = Math.floor(Math.random() * 4);
  $("." + boxesName[randomBoxSel]).addClass("pressed");
  setTimeout(function() {
    $("." + boxesName[randomBoxSel]).removeClass("pressed");
  }, 300);
  gamePattern.push($("." + boxesName[randomBoxSel]).attr("id"));
}

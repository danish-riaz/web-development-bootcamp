function calLove() {
  if (
    document.getElementById("name1").value == "" ||
    document.getElementById("name2").value == ""
  ) {
    //pass
  } else {
    var value = Math.random() * 100;
    value = Math.floor(value) + 1;
    alert("Your loving percentage is " + value + "%.");
  }
}

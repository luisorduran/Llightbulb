function lightbulbOnOff(status) {
  if (status) {
    document.getElementById("lightbulb").src =
      "https://www.w3schools.com/js/pic_bulbon.gif";
  } else {
    document.getElementById("lightbulb").src =
      "https://www.w3schools.com/js/pic_bulboff.gif";
  }
}

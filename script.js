function getHex() {
  var hex1 = document.getElementById("h1").value;
  var hex2 = document.getElementById("h2").value;
  document.getElementById("sandbox").style.backgroundImage = "linear-gradient(to right, #" + hex1 + ", #" + hex2 +")";
}

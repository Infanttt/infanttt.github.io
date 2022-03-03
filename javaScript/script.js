function openBut() {
  document.getElementById("navig").style.width = "300px";
  document.getElementById("navig").style.marginLeft = "0";
  document.getElementById("webapp").style.marginLeft = "300px";
  document.getElementById("menuBut").style.display = "none";
}
function closeBut() {
  document.getElementById("navig").style.marginLeft = "-300px";
  document.getElementById("webapp").style.marginLeft = "0px";
  document.getElementById("menuBut").style.display = "block";
}
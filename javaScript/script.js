function openBut() {
  document.getElementById("navig").style.width = "300px";
  document.getElementById("navig").style.marginLeft = "0";
  document.getElementById("mainContent").style.marginLeft = "300px";
  document.getElementById("menuBut").style.display = "none";
}
function closeBut() {
  document.getElementById("navig").style.marginLeft = "-300px";
  document.getElementById("mainContent").style.marginLeft = "0px";
  document.getElementById("menuBut").style.display = "block";
}
function sTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
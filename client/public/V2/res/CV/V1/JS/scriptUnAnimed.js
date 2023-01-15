var container1 = document.getElementById("container1");
var container2 = document.getElementById("container2");
var container3 = document.getElementById("container3");
var dot1 = document.getElementById("1dot");
var dot2 = document.getElementById("2dot");
var dot3 = document.getElementById("3dot");
var background1 = document.getElementById("b1");
var background2 = document.getElementById("b2");
var background3 = document.getElementById("b3");
var profil = document.getElementById("profil");
profil.style.backgroundImage = "url(RES/profil.png)";
background1.style.backgroundImage = "url(RES/Space.png)";
background1.style.opacity = 1;
background1.style.zIndex = 0;
background2.style.backgroundImage = "url(RES/Ville.png)";
background3.style.backgroundImage = "url(RES/Nature.png)";

function firsttosecond() {
  container1.style.transform = "translateX(-110%)";
  container2.style.transform = "translateX(-110%)";
  container3.style.transform = "translateX(-110%)";
  background1.style.opacity = 0;
  background2.style.opacity = 1;
  dot1.className = "fa fa-circle-o";
  dot2.className = "fa fa-circle";
}
function secondtofirst() {
  container1.style.transform = "translateX(0)";
  container2.style.transform = "translateX(0)";
  container3.style.transform = "translateX(0)";
  background1.style.opacity = 1;
  background2.style.opacity = 0;
  dot2.className = "fa fa-circle-o";
  dot1.className = "fa fa-circle";
}
function secondtothird() {
  container1.style.transform = "translateX(-220%)";
  container2.style.transform = "translateX(-220%)";
  container3.style.transform = "translateX(-220%)";
  background3.style.opacity = 1;
  background2.style.opacity = 0;
  dot2.className = "fa fa-circle-o";
  dot3.className = "fa fa-circle";
}
function thirdtosecond() {
  container1.style.transform = "translateX(-110%)";
  container2.style.transform = "translateX(-110%)";
  container3.style.transform = "translateX(-110%)";
  background3.style.opacity = 0;
  background2.style.opacity = 1;
  dot3.className = "fa fa-circle-o";
  dot2.className = "fa fa-circle";
}

document.getElementById("1right").onclick = firsttosecond;
document.getElementById("2left").onclick = secondtofirst;
document.getElementById("2right").onclick = secondtothird;
document.getElementById("3left").onclick = thirdtosecond;

setTimeout(backgroundInit, 2000);



//initialisation retardée des composants pour charger le fond en prio
function backgroundInit() {
  document.getElementById("profil").style.backgroundImage = "url(RES/profil.png)";
  document.getElementById("b1").style.backgroundImage = "url(RES/Space.png)";
  document.getElementById("b1").style.opacity = 1;
  document.getElementById("b1").style.zIndex = 0;
  document.getElementById("b2").style.backgroundImage = "url(RES/Ville.png)";
  document.getElementById("b3").style.backgroundImage = "url(RES/Nature.png)";
}




// ------------ Carroussel ------------ //


// méthodes de changement dans le carroussel
function firsttosecond() {
  document.getElementById("container1").style.transform = "translate3d(-110%,0,0)";
  document.getElementById("container2").style.transform = "translate3d(-110%,0,0)";
  document.getElementById("container3").style.transform = "translate3d(-110%,0,0)";
  document.getElementById("b1").style.opacity = 0;
  document.getElementById("b2").style.opacity = 1;
  document.getElementById("1dot").className = "fa fa-circle-o";
  document.getElementById("2dot").className = "fa fa-circle";
}
function secondtofirst() {
  document.getElementById("container1").style.transform = "translate3d(0,0,0)";
  document.getElementById("container2").style.transform = "translate3d(0,0,0)";
  document.getElementById("container3").style.transform = "translate3d(0,0,0)";
  document.getElementById("b1").style.opacity = 1;
  document.getElementById("b2").style.opacity = 0;
  document.getElementById("2dot").className = "fa fa-circle-o";
  document.getElementById("1dot").className = "fa fa-circle";
}
function secondtothird() {
  document.getElementById("container1").style.transform = "translate3d(-220%,0,0)";
  document.getElementById("container2").style.transform = "translate3d(-220%,0,0)";
  document.getElementById("container3").style.transform = "translate3d(-220%,0,0)";
  document.getElementById("b3").style.opacity = 1;
  document.getElementById("b2").style.opacity = 0;
  document.getElementById("2dot").className = "fa fa-circle-o";
  document.getElementById("3dot").className = "fa fa-circle";
}
function thirdtosecond() {
  document.getElementById("container1").style.transform = "translate3d(-110%,0,0)";
  document.getElementById("container2").style.transform = "translate3d(-110%,0,0)";
  document.getElementById("container3").style.transform = "translate3d(-110%,0,0)";
  document.getElementById("b3").style.opacity = 0;
  document.getElementById("b2").style.opacity = 1;
  document.getElementById("3dot").className = "fa fa-circle-o";
  document.getElementById("2dot").className = "fa fa-circle";
}
//Composantes carroussel
document.getElementById("1right").onclick = firsttosecond;
document.getElementById("2left").onclick = secondtofirst;
document.getElementById("2right").onclick = secondtothird;
document.getElementById("3left").onclick = thirdtosecond;





// ------------- Changement de Page -------------- //

var pageState = 1; // 1 Accueil, 2 contact
var languageState = 1; // 1 Français, 2 Anglais
var contact = document.getElementById("contact");
var accueil = document.getElementById("accueil");
var page = document.getElementById("page");







//Contact
contact.onclick = function switchC() {
  pageState = 2;
  document.getElementById("tete").className = "tete";
  $("#page").html(blocContact);
  document.getElementById("map").style.visibility = "visible";
  document.getElementById("mapContainer").style.visibility = "visible";
}








//Accueil
accueil.onclick = function switchA() {
  pageState = 1;

  document.getElementById("tete").className = "teteinvisible";
  document.getElementById("mapContainer").style.visibility = "hidden";
  document.getElementById("map").style.visibility = "hidden";
  $("#page").html(blocAccueil);

  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  var container3 = document.getElementById("container3");
  var dot1 = document.getElementById("1dot");
  var dot2 = document.getElementById("2dot");
  var dot3 = document.getElementById("3dot");
  backgroundInit();
  document.getElementById("1right").color = "red";
  document.getElementById("1right").onclick = firsttosecond;
  document.getElementById("2left").onclick = secondtofirst;
  document.getElementById("2right").onclick = secondtothird;
  document.getElementById("3left").onclick = thirdtosecond;

}

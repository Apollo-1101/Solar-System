let mybutton = document.getElementById("myBtn");
let searchButton = document.getElementById("search");
let searchInput = document.getElementById("input");
var phoneScreen = window.matchMedia("(max-width: 700px)");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.getElementById("myBtn").onclick = function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

searchButton.onclick = function () {
  if (searchInput.style.display === "block") {
    searchInput.style.display = "none";
  } else {
    searchInput.style.display = "block";
  }
};

document.getElementById("btn1").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/mercury.jpg";
};

document.getElementById("btn2").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/venus.jpg";
};

document.getElementById("btn3").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/earth.jpg";
};

document.getElementById("btn4").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/mars.jpg";
};

document.getElementById("btn5").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/jupiter.jpg";
};

document.getElementById("btn6").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/saturn.jpg";
};

document.getElementById("btn7").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/uranus.jpg";
};

document.getElementById("btn8").onclick = function () {
  document.getElementById("img").src = "../our-solar-system/images/neptune.jpg";
};

var buttons = document.querySelectorAll("button");
var initial = document.getElementById("initial");
var final = document.getElementById("final");

for (var i = 0; i < buttons.length; i++){
      buttons[i].addEventListener("click", function(){
            initial.classList.toggle("displaynone");
            final.classList.toggle("displaynone");
      });
}
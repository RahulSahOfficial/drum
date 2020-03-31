//no of drum
var noofdrum = document.querySelectorAll(".drum").length;

//click checker
for(var i=0;i<noofdrum;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){  var boton=this.innerHTML;
    soundplay(boton);
    animation(boton);});
}

//keyboard check
document.addEventListener("keydown",function(){soundplay(event.key);animation(event.key);});

//sound play
function soundplay(pressed)
{
  if(pressed=="w")
  {
  var crash=new Audio('sounds/crash.mp3');
  document.body.style.backgroundColor = "#ffb6b6";
  crash.play();
  }
  if(pressed=="a")
  {
  var kick=new Audio('sounds/kick-bass.mp3');
  kick.play();
  document.body.style.backgroundColor = "#f3c623";
  }
  if(pressed=="s")
  {
  var snare=new Audio('sounds/snare.mp3');
  snare.play();
  document.body.style.backgroundColor = "#aacfcf";
  }
  if(pressed=="d")
  {
  var tom1=new Audio('sounds/tom-1.mp3');
  tom1.play();
  document.body.style.backgroundColor = "#00a8cc";
  }
  if(pressed=="j")
  {
  var tom2=new Audio('sounds/tom-2.mp3');
  tom2.play();
  document.body.style.backgroundColor = "#f6d186";
  }
  if(pressed=="k")
  {
  var tom3=new Audio('sounds/tom-3.mp3');
  tom3.play();
  document.body.style.backgroundColor = "#b590ca";
  }
  if(pressed=="l")
  {
  var tom4=new Audio('sounds/tom-4.mp3');
  tom4.play();
  document.body.style.backgroundColor = "#baf1a1";
  }
}

function animation(temp)
{
  if(temp=="a"||temp=="w"||temp=="s"||temp=="d"||temp=="j"||temp=="k"||temp=="l")
  {
  document.querySelector("."+temp).classList.add("pressed");
  setTimeout(function(){document.querySelector("."+temp).classList.remove("pressed");},100);
}

}

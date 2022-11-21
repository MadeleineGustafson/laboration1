window.addEventListener("DOMContentLoaded", main);

let userName= "";

function main() {
  startScene();
}

/** First scene- gets username */

function startScene() {
  const input =document.createElement ("input");
  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  document.body.style.background = "#8be68a";

  button.textContent= "Done";
    button.onclick = function () {
      userName=input.value 
      welcomeScene() ;
     }

  title.textContent ="Hello!";
  p.textContent= "Please write your name below";
  
  document.body.innerHTML=(" ");
  document.body.append(title,p, input,button);
}

/** Welcome scene - starting the game */

function welcomeScene() {

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  document.body.style.background = "#8be68a";
  

  button.textContent ="Start";
  title.textContent =userName+ "! You must help Otis!";
  p.textContent=" The 2-year-old cocker spaniel Otis is stuck in the enchanted forest and can't find his way home, you have to help him! ";
  button.onclick= nextScene ;

  document.body.innerHTML=(" ");
  document.body.append(title,p, button,);
}

/** Magic tree - two options */
function nextScene() {
  document.body.innerHTML=("");

  const title2= document.createElement ("h2");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  document.body.style.background = "#8be68a";

  p.textContent= " You find Otis alone under a magic tree what do you do to get him to join you? ";
  title2.textContent="🌳✨"
  button.textContent ="Offer candy 🍬";
  button2.textContent="Call on him";
  
  button.onclick= thirdScene;
  button2.onclick=middleScene;
  document.body.append(title2, p, button, button2);
}

/**  Lake scene two buttons leads to diffrent paths */
function thirdScene() {
 document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  document.body.style.background = "#8be68a";

  p.textContent= " Otis takes the candy and goes with you. After walking for a while you come to a lake, but how are you going to get past it? ";
  title.textContent =" 🍬";
  button.textContent ="Swim across";
  button2.textContent="Walk around it";
  
  button.onclick= fourthScene;
  button2.onclick=seventhScene;
  document.body.append(title, p, button, button2);
}

/** Scene that leads back to main path */

function middleScene() {
  document.body.innerHTML=("");

  const p = document.createElement("p");
  const button = document.createElement ("button");
  document.body.style.background = "#8be68a";

  p.textContent= "Woops! Looks like Otis doesn't want to join you. Looks like you need to offer him some candy anyway.. ";
  button.textContent ="Offer some candy 🍬";
  
  button.onclick= thirdScene;
  document.body.append( p, button);

}
/** Swimming scene leas to two options */
function fourthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  document.body.style.background = "#8be68a";

  p.textContent= " The water is dark and cold, but eventually you cross the lake. There is a squirrel standing there who is terrified when he sees you. When the squirrel then runs away, Otis runs after it. What do you do? ";
  title.textContent =" 🐿";
  button.textContent ="Run after them!";
  button2.textContent="Wait and hope he comes back";
  document.body.style.background = "#153870";
 
  button.onclick=fifthScene;
  button2.onclick=sixthScene;
  document.body.append(title, p, button, button2);

}



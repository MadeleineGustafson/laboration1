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
  //const div= document.createElement ("div");
  button.textContent= "Klar";
    button.onclick = function () {
      userName=input.value 
      welcomeScene() ;
     }

  title.textContent ="Hello!";
  p.textContent= "Please write your name below";
  p.classList= "regular font";
  

  title.classList= "Regular font";

  document.body.innerHTML=(" ");
  document.body.append(title,p, button,input);
}

/** Welcome scene - starting the game */

function welcomeScene() {

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");

  
  button.textContent ="Start";
  title.textContent =userName+ "! You must help Otis!";
  p.textContent=" The 2-year-old cocker spaniel Otis is stuck in the enchanted forest and can't find his way home, you have to help him! ";
  p.classList= "regular font";
  button.onclick= nextScene ;

  title.classList= "Regular font";

  document.body.innerHTML=(" ");
  document.body.append(title,p, button,);
}

/** Magic tree - two options */
function nextScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " You find otis alone under a magic tree what do you do to get him to join you? ";
  title.textContent =" hej";
  button.textContent ="Offer candy";
  button2.textContent="Call on him";
  
  button.onclick= thirdScene;
  button2.onclick=middleScene;
  document.body.append(title, p, button, button2);
}
/**  Lake scene two options leads to diffrent paths */
function thirdScene() {
 document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= " Otis takes the candy and goes with you. After walking for a while you come to a lake, but how are you going to get past it? ";
  title.textContent =" titel 2";
  button.textContent ="Swim across";
  button2.textContent="Walk around it";
  
  button.onclick= fourthScene;
  button2.onclick=seventhScene;
  document.body.append(div,title, p, button, button2);
}

/** Scene that leads back to main path */

function middleScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= "Woops! Looks like Otis does'nt want to join you. Looks like you newwd to offer him some candy anyway.. ";
  title.textContent =" ";
  button.textContent ="Offer some candy";
 
  
  button.onclick= thirdScene;
  document.body.append(div,title, p, button, button2);

}
/** Swimming scene leas to two options */
function fourthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= " The water is dark and cold, but eventually you cross the lake. There is a squirrel standing there who is terrified when he sees you. When the squirrel then runs away, Otis runs after it. What do you do? ";
  title.textContent =" hej";
  button.textContent ="Run after them!";
  button2.textContent="Wait and hope he comes back";
  
  button.onclick=fifthScene;
  button2.onclick=sixthScene;
  document.body.append(div,title, p, button, button2);

}

/** Scene leads back to beginning */
function fifthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= "You run and run but can't find Otis. Finally, you see him under the magic tree again, and you simply get to ";
  title.textContent =" hej";
  button.textContent ="Start over";
  
  button.onclick= nextScene;
  document.body.append(div,title, p, button);

}

/** Scene that leads to diffrent paths */

function sixthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");
  

  p.textContent= " After a while, Otis returns and you move on. After a while you see a magical house. What do you do? ";
  title.textContent =" hej";
  button.textContent ="Walk in";
  button2.textContent="Walk past the house";
  
  button.onclick=tenthScene;
  button2.onclick=ninthScene;
  document.body.append(div,title, p, button, button2);

}

/** Troll scene with one option */
function seventhScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  
  const div= document.createElement ("div");

  p.textContent= " When you are halfway around the lake, a troll stands in the middle of the road. He says he's not going to let you pass if you don't give him something. ";
  title.textContent =" h";
  button.textContent =" Give him Otis's candy";
  
  
  button.onclick= eightScene;
  document.body.append(div,title, p, button);

}
 /** Scene with two options that leads to two diffrent end scenes */

function eightScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= " The troll lets you pass and you have now passed the lake. Further ahead you see a magical house. What do you do?";
  title.textContent =" hej";
  button.textContent ="Walk in";
  button2.textContent="Walk past the house";
  
  button.onclick=tenthScene;
  button2.onclick=ninthScene;
  document.body.append(div,title, p, button, button2);

}

/** First end scene */
function ninthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= " When you've walked around the house, you see the big road that leads home to safety. Thank you " +userName+ " for helping Otis come home! ";
  title.textContent =" hej";
  button.textContent ="play again?";
 
  
  button.onclick= startScene;
  document.body.append(div,title, p, button);

}

/** Second path leads to end scene nr 2 */
function tenthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  

  p.textContent= " When you enter the house, you see that it is full of gold and diamonds. You pick up as much as you can before you hear a sound and see an angry troll. Now there is only one thing to do ";
  title.textContent =" hej";
  button.textContent ="RUN!";
 
  
  button.onclick= eleventhScene;
  document.body.append(title, p, button);

}

/** Second end scene */

function eleventhScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");
  const div= document.createElement ("div");

  p.textContent= " You run as fast as you can and are finally out of the enchanted forest. Not only did you help Otis get home, now you're rich too! ";
  title.textContent =" Good job "+ userName + "!!";
  button.textContent ="start over?";
 
  button.onclick=startScene;
  document.body.append(div,title, p, button);

}

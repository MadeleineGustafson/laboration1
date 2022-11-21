/** Scene leads back to beginning */
function fifthScene() {
    document.body.innerHTML=("");
  
    const p = document.createElement("p");
    const button = document.createElement ("button");
    const button2=document.createElement ("button");
    document.body.style.background = "#8be68a";
  
    p.textContent= "You run and run but can't find Otis. Finally, you see him under the magic tree again, and you simply get to ";
    button.textContent ="Start over";
    
    button.onclick= nextScene;
    document.body.append( p, button);
  
  }
  
  /** Scene that leads to diffrent paths */
  
  function sixthScene() {
    document.body.innerHTML=("");
  
    const title= document.createElement ("h1");
    const p = document.createElement("p");
    const button = document.createElement ("button");
    const button2=document.createElement ("button");
    const div= document.createElement ("div");
    document.body.style.background = "#8be68a";
    
  
    p.textContent= " After a while, Otis returns and you move on. After a while you see a magical house. What do you do? ";
    title.textContent =" 🛖✨";
    button.textContent ="Walk in";
    button2.textContent="Walk past the house";
    
    button.onclick=tenthScene;
    button2.onclick=ninthScene;
    document.body.append(title, p, button, button2);
  
  }
  
  /** Troll scene with one option */
  function seventhScene() {
    document.body.innerHTML=("");
  
    const troll= document.createElement ("p");
     troll.classList ="troll";
    const p = document.createElement("p");
    const button = document.createElement ("button");
    
    const div= document.createElement ("div");
  
    p.textContent= " When you are halfway around the lake, a troll stands in the middle of the road. He says he's not going to let you pass if you don't give him something. ";
    troll.textContent ="🧌 ";
    button.textContent =" Give him Otis's candy";
    document.body.style.background = "#8be68a";
    
    button.onclick= eightScene;
    document.body.append(troll, p, button);
  
  }
   /** Scene with two options that leads to two diffrent end scenes */
  
  function eightScene() {
    document.body.innerHTML=("");
  
    const title= document.createElement ("h1");
    const p = document.createElement("p");
    const button = document.createElement ("button");
    const button2=document.createElement ("button");
    const div= document.createElement ("div");
    document.body.style.background = "#8be68a";
  
    p.textContent= " The troll lets you pass and you have now passed the lake. Further ahead you see a magical house. What do you do?";
    title.textContent =" 🛖✨";
    button.textContent ="Walk in";
    button2.textContent="Walk past the house";
    
    button.onclick=tenthScene;
    button2.onclick=ninthScene;
    document.body.append(title, p, button, button2);
  
  }
  
  /** First end scene */
  function ninthScene() {
    document.body.innerHTML=("");
  
    const title= document.createElement ("h1");
    const p = document.createElement("p");
    const button = document.createElement ("button");
    const button2=document.createElement ("button");
    const div= document.createElement ("div");
    document.body.style.background = "#8be68a";
  
    p.textContent= " When you've walked around the house, you see the big road that leads home to safety. Thank you " +userName+ " for helping Otis come home! ";
    title.textContent =" You made it!";
    button.textContent ="play again?";
   
    
    button.onclick= startScene;
    document.body.append(title, p, button);
  
  }
  
  /** Second path leads to end scene nr 2 */
  function tenthScene() {
    document.body.innerHTML=("");
  
    const title= document.createElement ("h1");
    const p = document.createElement("p");
    const button = document.createElement ("button");
    const button2=document.createElement ("button");
    document.body.style.background = "#dbc42c";

  
    p.textContent= " When you enter the house, you see that it is full of gold and diamonds. You pick up as much as you can before you hear a sound and see an angry troll. Now there is only one thing to do ";
    title.textContent =" 👑💎";
    button.textContent ="RUN!";
   
    
    button.onclick= eleventhScene;
    document.body.append(title, p, button);
  
  }
  
  /** Second end scene */
  
  function eleventhScene() {
    document.body.innerHTML=("");
  
    const title2= document.createElement ("h2");
    const p = document.createElement("p");
    const button = document.createElement ("button");
    const button2=document.createElement ("button");
    const div= document.createElement ("div");
    document.body.style.background = "#8be68a";
  
    p.textContent= " You run as fast as you can and are finally out of the enchanted forest. Not only did you help Otis get home, now you're rich too! ";
    title.textContent =" Good job "+ userName + "!! 💎👑";
    button.textContent ="Start over?";
   
    button.onclick=startScene;
    document.body.append(title2 , p, button);
  
  }
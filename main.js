window.addEventListener("DOMContentLoaded", main);

function main() {
  startScene();
}

function startScene() {
  document.body.innerHTML=("");
  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  
  button.textContent ="Starta";
  title.textContent =" Hjälp Otis at hitta hem";
  p.textContent= " Den 2-åriga cocker spaniels Otis är fast I trollskogen och kan inte hitta hem, du måste hjälpa honom! ";
  button.onclick= nextScene ;


  document.body.append(title,p, button);
}

function nextScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " Du hittar otis ensam under ett magiskt träd vad gör du för att få honom att gå med dig? ";
  title.textContent =" hej";
  button.textContent ="Ge godis";
  button2.textContent="Ropa på honom";
  
  button.onclick= thirdScene;
  button2.onclick=middleScene;
  document.body.append(title, p, button, button2);
}

function thirdScene() {
 document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " Otis tar godiset och bär den med sig nöjt. När ni gått en bit kommer ni till en sjö, men hur ska ni ta er förbi den? ";
  title.textContent =" titel 2";
  button.textContent ="Simma över";
  button2.textContent="Gå runt";
  
  button.onclick= fourthScene;
  button2.onclick=seventhScene;
  document.body.append(title, p, button, button2);
}

function middleScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  //p.textContent= "Vattnet är mörkt och kallt men efter en stunds simmande kommer ni över sjön. Där står en ekorre som blir livrädd när den får se er. När ekorren sedan flyr springer Otis efter. Vad gör du? ";
  title.textContent =" hej";
  //button.textContent ="Spring efter";
  //button2.textContent="Väntar och hoppas han kommer tillbaka";
  
  button.onclick= fifthScene;
  button2.onclick=seventhScene;
  document.body.append(title, p, button, button2);

}

function fourthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= "Vattnet är mörkt och kallt men efter en stunds simmande kommer ni över sjön. Där står en ekorre som blir livrädd när den får se er. När ekorren sedan flyr springer Otis efter. Vad gör du? ";
  title.textContent =" hej";
  button.textContent ="Spring efter";
  button2.textContent="Väntar och hoppas han kommer tillbaka";
  
  button.onclick=fifthScene;
  button2.onclick=sixthScene;
  document.body.append(title, p, button, button2);

}

function fifthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= "Du springer och springer men hittar inte Otis. Till slut kommer du tillbaka till det magiska trädet igen, och ni får helt enkelt ";
  title.textContent =" hej";
  button.textContent ="Börja om";
  
  button.onclick= nextScene;
  document.body.append(title, p, button);

}

function sixthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " Efter en stund kommer otis tillbaka och ni går vidare. Och kommer till ett magiskt hus. Vad gör ni? ";
  title.textContent =" hej";
  button.textContent ="Går in";
  button2.textContent="Går vidare";
  
  button.onclick=tenthScene;
  button2.onclick=ninthScene;
  document.body.append(title, p, button, button2);

}
function seventhScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " När ni är halvvägs runt sjön står ett troll mitt i vägen. Han säger att han inte tänker släppa förbi er om ni inte ger honom något ";
  title.textContent =" h";
  button.textContent ="";
  button2.textContent="";
  
  button.onclick= eightScene;
  document.body.append(title, p, button, button2);

}
function eightScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " Trollet släpper förbi er och ni har nu kommit förbi sjön. Längre fram ser ni ett magiskt hus. Vad gör ni?";
  title.textContent =" hej";
  button.textContent ="Går in i huset";
  button2.textContent="Går vidare";
  
  button.onclick=tenthScene;
  button2.onclick=ninthScene;
  document.body.append(title, p, button, button2);

}
function ninthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " När ni gått runt huset ser ni den stora vägen som leder hem till tryggheten. Tack för att du hjälpte Otis komma hem! ";
  title.textContent =" hej";
  button.textContent ="Börja om";
 
  
  button.onclick= startScene;
  document.body.append(title, p, button);

}
function tenthScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " När ni kommer in i huset ser ni att det är fullt av guld och diamanter. Ni plockar på er så mycket ni kan innan ni hör ett ljud och får se ett argt troll. Nu finns det bara en sak att göra ";
  title.textContent =" hej";
  button.textContent ="Spring";
 
  
  button.onclick= eleventhScene;
  document.body.append(title, p, button);

}

function eleventhScene() {
  document.body.innerHTML=("");

  const title= document.createElement ("h1");
  const p = document.createElement("p");
  const button = document.createElement ("button");
  const button2=document.createElement ("button");

  p.textContent= " Ni springer så snabbt ni kan och är äntligen ute ur trollskogen. Du hjälpte inte bara otis att komma hem, nu är ni rika också! ";
  title.textContent =" Hej";
  button.textContent ="Börja om?";
 
  
  button.onclick=startScene;
  document.body.append(title, p, button);

}

window.addEventListener("DOMContentLoaded", main);

function main() {
  startScene();
}

function startScene() {
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
  button.textContent ="Klicka här";
  button2.textContent="knapp2";
  document.body.append(title, p, button, button2);

}


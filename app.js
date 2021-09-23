const templateCard = document.getElementById("template-card").content;

const cards = document.getElementById("cards");

const fragment = document.createDocumentFragment();

let posts = {};

document.addEventListener("DOMContentLoaded", () => {
  fetchData();
});

const fetchData = async () => {
  try {
    const res = await fetch("api.json");
    const data = await res.json();
    pintarCards(data);
  } catch (error) {
    console.log(error);
  }
};

const pintarCards = (data) => {
  data.forEach((insecto) => {
    templateCard.querySelector("img").setAttribute("src", insecto.img);
    templateCard.querySelector("a").setAttribute("href", insecto.link);
    templateCard.querySelector("h2").textContent = insecto.orden;
    templateCard.querySelector("h1").textContent = insecto.nombre;
    templateCard.querySelector("p").textContent = insecto.desc;
    const clone = templateCard.cloneNode(true);
    fragment.appendChild(clone);
  });
  cards.appendChild(fragment);
};

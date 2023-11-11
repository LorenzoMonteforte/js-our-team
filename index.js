// Array contenente i membri del team
const membri = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "img-team/img/wayne-barnett-founder-ceo.jpg"
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "img-team/img/angela-caroll-chief-editor.jpg"
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "img-team/img/walter-gordon-office-manager.jpg"
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "img-team/img/angela-lopez-social-media-manager.jpg"
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "img-team/img/scott-estrada-developer.jpg"
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "img-team/img/barbara-ramos-graphic-designer.jpg"
    }
];
// Stampa in console le informazioni dei membri del team
for(let i=0; i<membri.length; i++){
    for(let chiave in membri[i]){
        console.log(chiave + " : " + membri[i][chiave]);
    }
    console.log("");
}
// Stampa in pagina le informazioni dei membri del team
const container = document.getElementById("container");
for(let i=0; i<membri.length; i++){
    // cardContainer
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("cardContainer");
    // card
    const card = document.createElement("div");
    card.classList.add("card");
    cardContainer.appendChild(card);
    // foto
    const foto = document.createElement("img");
    foto.src = membri[i].foto;
    card.appendChild(foto);
    // nome
    const nome = document.createElement("div");
    nome.classList.add("nome");
    nome.textContent = membri[i].nome;
    card.appendChild(nome);
    // ruolo
    const ruolo = document.createElement("div");
    ruolo.classList.add("ruolo");
    ruolo.textContent = membri[i].ruolo;
    card.appendChild(ruolo);
    // Appende il tutto a cardContainer
    container.appendChild(cardContainer);
}
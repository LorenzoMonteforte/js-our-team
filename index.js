// Array contenente i membri del team
const membri = [
    {
        nome : "Wayne Barnett",
        ruolo : "Founder & CEO",
        foto : "wayne-barnett-founder-ceo.jpg"
    },
    {
        nome : "Angela Caroll",
        ruolo : "Chief Editor",
        foto : "angela-caroll-chief-editor.jpg"
    },
    {
        nome : "Walter Gordon",
        ruolo : "Office Manager",
        foto : "walter-gordon-office-manager.jpg"
    },
    {
        nome : "Angela Lopez",
        ruolo : "Social Media Manager",
        foto : "angela-lopez-social-media-manager.jpg"
    },
    {
        nome : "Scott Estrada",
        ruolo : "Developer",
        foto : "scott-estrada-developer.jpg"
    },
    {
        nome : "Barbara Ramos",
        ruolo : "Graphic Designer",
        foto : "barbara-ramos-graphic-designer.jpg"
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
const infoMembriTeam = document.getElementById("infoMembriTeam");
for(let i=0; i<membri.length; i++){
    const ulMembroTeam = document.createElement("ul");
    for(let chiave in membri[i]){
        const liMembroTeam = document.createElement("li");
        liMembroTeam.textContent = chiave + " : " + membri[i][chiave];
        ulMembroTeam.appendChild(liMembroTeam);
    }
    infoMembriTeam.appendChild(ulMembroTeam);
}
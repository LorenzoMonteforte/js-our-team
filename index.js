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
const infoMembriTeam = document.getElementById("infoMembriTeam");
for(let i=0; i<membri.length; i++){
    const ulMembroTeam = document.createElement("ul");
    for(let chiave in membri[i]){
        // Se nome o ruolo crea una stringa, se foto inserisci la stringa nell'src di un'immagine
        if(chiave != "foto"){
            const liMembroTeam = document.createElement("li");
            liMembroTeam.textContent = chiave + " : " + membri[i][chiave];
            ulMembroTeam.appendChild(liMembroTeam);
        }else{
            const imgMembroTeam = document.createElement("img");
            imgMembroTeam.src = membri[i][chiave];
            ulMembroTeam.appendChild(imgMembroTeam);
        }
    }
    infoMembriTeam.appendChild(ulMembroTeam);
}
/*
nome :
costo lancio:
           costo neutro 
                 numero:
           costo specifico:
                tipo:
                numero:
tipo di carta:
      specifica:
simbolo espansione:
          tipo
          rarità          
testo : abilità
        tipo
        costo abilità :
         costo neutro 
                 numero
         costo specifico:
                tipo
                numero
         testo di colore(umorismo)
info artista
numero di collezione
forza / costituzione
bordo carta 
*/
const fullDeck = [
  {
    id: 1,
    name: " 1creatura Bloodfire Colossus",
    launchCost: ["6", "R", "R"],
    conbinedManaCost: 8,
    cardType: "creature",
    subType: "gigant",
    expanxion: {
      name: "esodo",
      reprintId: 9,
      rarity: "goldenroad",
      collectionNr: "12/43",
    },
    flavorText: {
      quote: "We connot.....",
      autor: "name autor",
    },
    abilities: [
      {
        launchCost: ["R", "T"],
        description: "lorem",
      },
      {
        launchCost: ["W", "T"],
        description: "lorem...2...",
      },
    ],
    illustration: {
      author: {
        id: 1,
        name: "Greg Smith",
      },
      source: "...../pic.jpg",
    },

    costitution: 13,
    strength: 13,
    borderColor: "#0000",
    background: {
      color: "red",
      source: "...../imgpic.jpg",
    },
  },
  {
    id: 2,
    name: "2 creatura Bloodfire Colossus",
    launchCost: ["6", "R", "R"],
    conbinedManaCost: 8,
    cardType: "creature",
    subType: "gigant",
    expanxion: {
      name: "esodo",
      reprintId: 9,
      rarity: "goldenroad",
      collectionNr: "12/43",
    },
    flavorText: {
      quote: "We connot.....",
      autor: "name autor",
    },
    abilities: [
      {
        launchCost: ["R", "T"],
        description: "lorem",
      },
      {
        launchCost: ["W", "T"],
        description: "lorem...2...",
      },
    ],
    illustration: {
      author: {
        id: 1,
        name: "Greg Smith",
      },
      source: "...../pic.jpg",
    },

    costitution: 13,
    strength: 13,
    borderColor: "#0000",
    background: {
      color: "red",
      source: "...../imgpic.jpg",
    },
  },
  {
    id: 3,
    name: " 3 creatura Bloodfire Colossus",
    launchCost: ["6", "R", "R"],
    conbinedManaCost: 8,
    cardType: "creature",
    subType: "gigant",
    expanxion: {
      name: "esodo",
      reprintId: 9,
      rarity: "goldenroad",
      collectionNr: "12/43",
    },
    flavorText: {
      quote: "We connot.....",
      autor: "name autor",
    },
    abilities: [
      {
        launchCost: ["R", "T"],
        description: "lorem",
      },
      {
        launchCost: ["W", "T"],
        description: "lorem...2...",
      },
    ],
    illustration: {
      author: {
        id: 1,
        name: "Greg Smith",
      },
      source: "...../pic.jpg",
    },

    costitution: 13,
    strength: 13,
    borderColor: "#0000",
    background: {
      color: "red",
      source: "...../imgpic.jpg",
    },
  },
];

// console.log(firstCard);
//! funcion
const createCardTemplate = (card) => {
  const subType = card.subType ? `- ${card.subType}` : "";

  let abilitiesContent = "<em> Nessuna abilità </em>";
  if (card.abilities.length) {
    abilitiesContent = "<ul>";
    for (let i = 0; i < card.abilities.length; i++) {
      const currentAbility = card.abilities[i];
      abilitiesContent += `<li>Descrizione:${currentAbility.description}</li>`;
      abilitiesContent += `<li>Costo di lancio:${currentAbility.launchCost.join(",")}</li>`;
    }
    abilitiesContent += "</ul>";
  }

  const cardTemplate = `
  <ul class="card">
  <li>Id:${card.id}</li>
  <li>Nome:${card.name}</li>
  <li>Costo lancio:${card.launchCost.join(", ")}</li>
  <li>Costo mana convertito:${card.conbinedManaCost}</li>
  <li>Tipo carta:${card.cardType} ${subType}</li>
  <li>Espansione:
    <ul>
      <li> Ristampa:${card.expanxion.reprintId}</li>
      <li> Nome:${card.expanxion.name}</li>
      <li> Rarità:${card.expanxion.rarity}</li>
      <li> Numero di collezione:${card.expanxion.collectionNr}</li>
     </ul>
  </li>
  <li> Testo di colore: ${card.flavorText.quote} - ${card.flavorText.autor}</li>
  <li> Abilità:${abilitiesContent} </li>
  <li> Costituzione:${card.costitution} </li>
  <li> Forza:${card.strength} </li>
  <li> Colore di bordo:${card.borderColor} </li>
  <li> Illustrazione:
  <ul>
   <li>Autore:${card.illustration.author.name}</li>
   <li>ID:${card.illustration.author.id}</li>
   <li>Immagine:${card.illustration.source}</li>
  </ul>
  <li> Background:
  <ul>
   <li>Colore di sfondo :${card.background.color}</li>
   <li>Immagine:${card.background.source}</li>
  </ul>
  </li>
  </ul>
  `;

  return cardTemplate;
};

const renderDeck = (deck, targhetElement) => {
  let deckTemplate = "";
  for (let i = 0; i < deck.length; i++) {
    const currentCard = deck[i];
    const currentCardTenmplate = createCardTemplate(currentCard);
    deckTemplate += currentCardTenmplate;
  }

  // const cardTemplate = createCardTemplate(firstCard);
  targhetElement.innerHTML = deckTemplate;
};

//!stampa in pagina
const cardSection = document.getElementById("cards");
renderDeck(fullDeck, cardSection);

//! filter section logic

const inputField = document.getElementById("search");
const selectField = document.getElementById("filter");
const button = document.getElementById("button");

// intercetto cambiamento
selectField.addEventListener("change", () => {
  const currentValue = selectField.Value;
  if (currentValue == "all") {
    inputField.classList.add = "hidden";
  }
});

button.addEventListener("click", () => {
  const inputValue = inputField.value;
  const selectValue = selectField.value;

  if (selectValue == "all") {
    renderDeck(fullDeck, cardSection);
    return;
  }
  const filteredDeck = [];
  for (i = 0; i < fullDeck.length; i++) {
    const currentCard = fullDeck[i];
    // if (currentCard[selectValue] == inputValue) {
    //   filteredDeck.push(currentCard);
    // }

    switch (selectValue) {
      case "id":
      case "costitution":
      case "strength":
      case "conbinedManaCost":
        if (currentCard[selectValue] == inputValue) {
          filteredDeck.push(currentCard);
        }
        break;
      default:
        if (currentCard[selectValue].includes(inputValue)) {
          filteredDeck.push(currentCard);
        }
        break;
    }
  }
  renderDeck(filteredDeck, cardSection);
});

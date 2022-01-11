const FRONT = "card-front"
const BACK =  "card-back"
const CARD = "card"
const ICON = "icon"


let animals = [
    'bear',
    'dog',
    'elephant',
    'lion',
    'mico',
    'passaro',
    'snake',
    'tiger',
    'tucano',
    'zebra',
];

let cards = null;

startGame();

function startGame(){
    cards = createCardsFromAnimals(animals);
    shuffleCards(cards);
    
    initializeCards(cards);
    
    
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");
    
    
    cards.forEach(card=>{

        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);

    })
    
}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}


function createCardFace(face, card , element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face)
    if(face === FRONT){
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/" + card.icon + ".jpg";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}


function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}


function createCardsFromAnimals(animals){

    let cards = [];

    animals.forEach( (animal) => {
        cards.push(createPairFromAnimals(animal));
    })

    return cards.flatMap(pair=>pair)
}



function createPairFromAnimals(animal){
    return[{
        id: createIdWithAnimal(animal),
        icon: animal,
        flipped: false,
    }, {
        id: createIdWithAnimal(animal),
        icon: animal,
        flipped: false,
     } ]
}



function createIdWithAnimal(animal){
    return animal + parseInt(Math.random() * 1000);
}

function flipCard(){
    this.classList.add("flip")
}

const FRONT = "card-front"
const back =  "card-back"
const CARD = "card"
const ICON = "icon"






startGame();

function startGame(){
    cards = game.createCardsFromAnimals(animals);
    shuffleCards(cards);
    initializeCards(cards);
}

function initializeCards(cards){
    let gameBoard = document.getElementById("gameBoard")
    
    cards.forEach(card => {
        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);

    })
}

function createCardContent(card, cardElement){
    createCardFace(FRONT, card, cardElement)
    createCardFace(back, card, cardElement)
}


function createCardFace(face, card, element){
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face)
    if(face === FRONT){
        let iconElement = document.createElement('img')
        iconElement.classList.add(ICON)
        iconElement.src = "./assets/" + card.icon + ".jpg";
        cardElementFace.appendChild(iconElement);
    }else{
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace);
}

/*function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex = 0;

    while(currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }
}*/


function flipCard(){
    this.classList.add("flip")
}
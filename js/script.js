const FRONT = "card-front"
const BACK = "card-back"
const CARD = "card"
const ICON = "icon"






startGame();

function startGame() {

    initializeCards(game.createCardsFromAnimals());
    unFlipStartGame();

}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");
    gameBoard.innerHTML = '';

    game.cards.forEach(card => {

        let cardElement = document.createElement('div')
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;
        cardElement.classList.add('flip');


        createCardContent(card, cardElement);

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement);

    })

}

function createCardContent(card, cardElement) {
    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}


function createCardFace(face, card, element) {
    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face)
    if (face === FRONT) {
        let iconElement = document.createElement('img');
        iconElement.classList.add(ICON);
        iconElement.src = "./assets/" + card.icon + ".jpg";
        cardElementFace.appendChild(iconElement);
    } else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}


function flipCard() {
    if (game.setCard(this.id)) {
        this.classList.add("flip");
        if (game.secondCard) {

            if (game.checkMatch()) {

                game.clearCards();
                if (game.checkGameOver()) {
                    let gameOverLayer = document.getElementById('gameOver');
                    gameOverLayer.style.display = 'flex';
                }

            } else {

                setTimeout(() => {

                    let fristCardView = document.getElementById(game.fristCard.id);
                    let SecondCardView = document.getElementById(game.secondCard.id);

                    fristCardView.classList.remove('flip');
                    SecondCardView.classList.remove('flip');
                    game.unFlipCards();
                }, 1000);


            }
        }
    }
}


function newGame() {
    game.clearCards();
    startGame();
    let newGameLayer = document.getElementById('newGame')
    newGameLayer.style.display = 'none'
}

function restart() {
    game.clearCards();
    startGame();
    let gameOverLayer = document.getElementById('gameOver');
    gameOverLayer.style.display = 'none';


}

function backMenu() {
    let newGameLayer = document.getElementById('newGame')
    newGameLayer.style.display = 'flex'
    let gameOverLayer = document.getElementById('gameOver');
    gameOverLayer.style.display = 'none';
}

function unFlipStartGame() {
    let cardFlipped = document.getElementsByClassName('card');
    console.log(cardFlipped)


    setTimeout(() => {
        for (unflip of cardFlipped) {

            unflip.classList.remove('flip')
            
        }
    }, 2000)
   game.clearCards();
}




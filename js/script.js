const FRONT = "card_front"
const back =  "bard_back"


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
    console.log(cards);
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

    for(let animal of animals){
        cards.push(createPairFromAnimals(animal));
    }

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
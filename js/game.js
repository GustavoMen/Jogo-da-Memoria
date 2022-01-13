let game = {

    lockMode: false,
    fristCard: null,
    secondCard: null,

    setCard: function (id) {

        let card = this.cards.filter(card => card.id === id)[0];

        if (card.flipped || this.lockMode) {
            return false;
        }

        if (!this.fristCard) {
            this.fristCard = card;
            this.fristCard.flipped = true;
            return true;
        } else {
            this.secondCard = card;
            this.secondCard.flipped = true;
            this.lockMode = true;
            return true;
        }

    },

    lockModeTrue: function(){
        this.lockmode = true
    },

    checkMatch: function () {
        if(!this.fristCard || !this.secondCard){
            return false
        }
        return this.fristCard.icon === this.secondCard.icon;
    },

    clearCards: function () {
        this.fristCard = null;
        this.secondCard = null;
        this.lockMode = false;

    },

    unFlipCards: function(){
        this.fristCard.flipped = false;
        this.secondCard.flipped = false;
        this.clearCards();
    },

    checkGameOver(){

       return this.cards.filter(card=>!card.flipped).length == 0

    },

    animals: [
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
    ],

    cards: null,

    createCardsFromAnimals: function () {

        this.cards = [];

        this.animals.forEach((animal) => {
            this.cards.push(this.createPairFromAnimals(animal));
        })

        this.cards = this.cards.flatMap(pair => pair)
        this.shuffleCards();
        return this.cards
    },



    createPairFromAnimals: function (animal) {
        return [{
            id: this.createIdWithAnimal(animal),
            icon: animal,
            flipped: false,
        }, {
            id: this.createIdWithAnimal(animal),
            icon: animal,
            flipped: false,
        }]
    },



    createIdWithAnimal: function (animal) {
        return animal + parseInt(Math.random() * 1000);
    },


    shuffleCards: function (cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;

        while (currentIndex !== 0) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }


}
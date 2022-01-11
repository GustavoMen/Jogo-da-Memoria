let game = {

    animals : [
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

    cards : null,

    createCardsFromAnimals: function() {

        this.cards = [];
    
        this.animals.forEach( (animal) => {
            this.cards.push(this.createPairFromAnimals(animal));
        })
    
        this.cards = this.cards.flatMap(pair=>pair)
        this.shuffleCards();
        return this.cards
    },
    
    
    
    createPairFromAnimals: function(animal) {
        return[{
            id: this.createIdWithAnimal(animal),
            icon: animal,
            flipped: false,
        }, {
            id: this.createIdWithAnimal(animal),
            icon: animal,
            flipped: false,
         } ]
    },
    
    
    
    createIdWithAnimal: function(animal){
        return animal + parseInt(Math.random() * 1000);
    },


    shuffleCards: function(cards) {
        let currentIndex = this.cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0){
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }


}
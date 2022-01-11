let game = {


    cards : null,


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

    

    createCardsFromAnimals: function(){

        this.cards = [];
    
        this.animals.forEath ((animal) =>{
        this.cards.push(this.createPairFromAnimals(animal));
        })
        
        return this.cards.flatMap(pair=>pair)
    },
    
    
    
    createPairFromAnimals: function(animal){
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

    shuffleCards: function (cards) {
        let currentIndex = cards.length;
        let randomIndex = 0;
    
        while(currentIndex !== 0){
    
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
    
            [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
        }
    }

}
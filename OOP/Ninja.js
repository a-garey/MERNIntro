class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName() {
        console.log(`${this.name}`);
    }

    showStats() {
        console.log(myNinja);
    }

    drinkSake(){
        this.health += 5;
        console.log(`${this.health}`);
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name);
        this.health = 200;
        this.speed = 10;
        this.strength = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log(`The heart that gives, gathers`)
    }

    showStats() {
        console.log(mySensei);
    }

}

let  myNinja = new Ninja("Hyabusa", 5);
let mySensei = new Sensei("Master Splinter");


myNinja.sayName();
myNinja.drinkSake();
myNinja.showStats();
mySensei.showStats();
mySensei.speakWisdom();
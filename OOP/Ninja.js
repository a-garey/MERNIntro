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
        this.health + 5;
        console.log(`${this.health}`);
    }
}

let  myNinja = new Ninja("Hyabusa", 5);


myNinja.sayName();
myNinja.drinkSake();
myNinja.showStats();
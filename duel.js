class Card{
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card{
    constructor(name, cost, power, res){
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if(target instanceof Unit){
            target.res -= this.power;
            this.res -= this.cost;
        } else {
            throw new Error( "Target must be a unit!" )
        }
    }
}

class Effect extends Card{
    constructor(name, cost, text, magnitude){
        super(name, cost);
        this.text = text;
        this.magnitude = magnitude;
    }
    play(target) {
        if(target instanceof Unit){
            target.res += this.res;
        } else {
            throw new Error( "Target must be a unit!" )
        }

    }
}

// Ninjas 
// const redBeltNinja = new Unit("Red Belt Ninja", 4, 4, 4);
// const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// Effects
// const hardAlgo = new Effect("Hard Algo", 2, "increase target's resilience by 3", 3);
// const unPromRej = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", -2);
// const pairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", 2);

// Check instances
// console.log(redBeltNinja)
// console.log(blackBeltNinja)

// console.log(hardAlgo);
// console.log(unPromRej);
// console.log(pairProgram);

// Gameplay Scenario
// make an instance of unit called red belt ninja
const redBeltNinja = new Unit("Red Belt Ninja", 4, 4, 4);

// make an instance of unit called black belt ninja
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);

// make an instance of effect called hard algorithm
const hardAlgo = new Effect("Hard Algo", 2, "increase target's resilience by 3", 3);

// make an instance of effect called unhandled promise rejection and play it on red belt ninja
const unPromRej = new Effect("Unhandled Promise Rejection", 1, "Reduce target's resilience by 2", -2);
unPromRej.play(redBeltNinja);

// make an instance of effect called pair programming and play it on red belt ninja
const pairProgram = new Effect("Pair Programming", 3, "increase target's power by 2", 2);
pairProgram.play(redBeltNinja);

// red belt ninja uses attack method on black belt ninja
redBeltNinja.attack(blackBeltNinja);

console.log(redBeltNinja, blackBeltNinja);
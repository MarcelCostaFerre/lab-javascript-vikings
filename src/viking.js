// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health
        this.strength = strength
    }
    attack(){
        return this.strength
    }
    receiveDamage(damage){
        this.health-=damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super (health,strength)
        this.name = name
    }
    receiveDamage(damage){
        this.health-=damage
        if (this.health>0){
            return `${this.name} has received ${damage} points of damage`
        }else {return `${this.name} has died in act of combat`}

    }
    battleCry(){
        return 'Odin Owns You All!'
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength){
        super (health,strength)
    }
    receiveDamage(damage){
        this.health-=damage
        if (this.health>0){
            return `A Saxon has received ${damage} points of damage`
        }else {return `A Saxon has died in combat`}
    }
}

// War
class War {    
    vikingArmy = []
    saxonArmy = []
    
    addViking(Viking){
        this.vikingArmy.push(Viking)
    }
    addSaxon(Saxon){
        this.saxonArmy.push(Saxon)
    }
    vikingAttack(){
        let saxonRandomIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let vikingRandomIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let saxonRandom = this.saxonArmy[saxonRandomIndex]
        let vikingRandom = this.vikingArmy[vikingRandomIndex]
        let result = saxonRandom.receiveDamage(vikingRandom.strength)
    
        if(saxonRandom.health <= 0){
            this.saxonArmy.splice(saxonRandomIndex, 1)
        }
        return result
    }
    saxonAttack(){
        let saxonRandomIndex = Math.floor(Math.random()*this.saxonArmy.length)
        let vikingRandomIndex = Math.floor(Math.random()*this.vikingArmy.length)
        let saxonRandom = this.saxonArmy[saxonRandomIndex]
        let vikingRandom = this.vikingArmy[vikingRandomIndex]
        let result = vikingRandom.receiveDamage(saxonRandom.strength)
    
        if(vikingRandom.health <= 0){
            this.vikingArmy.splice(vikingRandomIndex, 1)
        }
        return result
    }
    showStatus(){
        if (this.saxonArmy.length===0){
            return 'Vikings have won the war of the century!'
        }
        if (this.vikingArmy.length===0){
            return 'Saxons have fought for their lives and survived another day...'
        }
        if (this.saxonArmy.length===1 && this.vikingArmy.length===1){
            return 'Vikings and Saxons are still in the thick of battle.'
        }
    }
}

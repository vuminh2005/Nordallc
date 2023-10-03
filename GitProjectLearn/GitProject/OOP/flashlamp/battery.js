class Battery {
    energy

    constructor(energy) {
        this.energy = energy
    }

    setEnergy(number) {
        this.energy = number
    }

    getEnergy() {
        return this.energy
    }

    decreaseEnergy() {
        if (this.energy > 0) {
            this.energy -= 1
        } else {
            console.log("Run out of energy")
        }

    }

    light() {
        if(this.status){
            console.log("Lighting")
        } else {
            aconsole.log("Not lighting")
        }
    }

    turnOn() {
        this.status = true
    }
    
    turnOff() {
        this.status = false
    }
}
class Rat {
    name
    weight
    speed
    status

    constructor(name, weight, speed) {
        this.name = name
        this.weight = weight
        this.speed = speed
        this.status = true
        this.check = false
    }

    noise() {
        console.log(this.name + " kêu chít chít")
    }
}
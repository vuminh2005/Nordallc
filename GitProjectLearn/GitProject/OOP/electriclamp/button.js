class SwitchButton {
    status
    lamp

    constructor(status) {
        this.status = status
    }

    connectToLamp(ElectricLamp) {
        this.lamp = ElectricLamp
    }

    switchOff() {
        this.status = false
        this.lamp.status = false    
    }

    switchOn() {
        this.status = true
        this.lamp.status = true
    }
}
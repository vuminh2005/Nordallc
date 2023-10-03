class FlashLamp {
    status
    battery

    constructor(status, battery) {
        this.status = status
        this.battery = battery
    }

    setBattery(battery) {
        this.battery = battery
    }

    getBatteryInfo() {
        return this.battery.energy
    }

}
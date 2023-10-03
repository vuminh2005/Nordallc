class Tivi {
    currentChannel
    currentVolume
    status

    constructor(currentChannel, currentVolume, status) {
        this.currentChannel = currentChannel
        this.currentVolume = currentVolume
        this.status = status
    }

    switchButton() {
        this.status = !this.status
        return this.status
    }

    changeChannel(channel) {
        if (this.status === true) {
            this.currentChannel = channel
        } else {
            console.log("Turn on TV first!")
        }
    }

    changeVolume(volume) {
        if (this.status === true) {
            this.currentVolume = volume
        } else {
            console.log("Turn on TV first!")
        }
    }
}
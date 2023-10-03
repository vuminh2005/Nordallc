class Remote {
    code

    constructor(code) {
        this.code = code
    }

    changeChannel(tivi) {
        let channel = +prompt("Change channel to:")
        tivi.currentChannel = channel
    }

    changeVolume(tivi) {
        let volume = +prompt("Change volume to:")
        tivi.currentVolume = volume
    }

    switchButton(tivi) {
        tivi.status = !tivi.status
        return tivi.status
    }
}